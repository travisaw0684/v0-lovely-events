# AWS WordPress Backend Notes

This repo's main site is Next.js on Vercel. The WordPress backend runs separately on AWS Lightsail and can expose content to the frontend through the WordPress REST API.

## Current Lightsail WordPress Instance

Created on May 5, 2026 using AWS CLI profile `codex-dev`.

| Field | Value |
| --- | --- |
| AWS account | `613208686164` |
| Region | `us-east-1` |
| Availability zone | `us-east-1a` |
| Lightsail instance | `lovely-events-wordpress` |
| Static IP resource | `lovely-events-wordpress-ip` |
| Public IP | `44.216.7.118` |
| Site URL | `http://44.216.7.118` |
| Admin URL | `http://44.216.7.118/wp-admin` |
| Blueprint | WordPress `6.9.1` |
| Bundle | `nano_3_0` |
| Estimated cost | `$5/month` max, billed hourly while running |
| Tags | `Project=LovelyEvents`, `ManagedBy=Codex` |

WordPress responded with HTTP 200 at `http://44.216.7.118` after provisioning.

## Access Notes

Use the AWS SSO profile:

```sh
aws sso login --profile codex-dev
aws sts get-caller-identity --profile codex-dev
```

WordPress admin login:

- URL: `http://44.216.7.118/wp-admin`
- Username: `user`
- Password: stored on the Lightsail instance, not in this repo

To retrieve the initial Bitnami WordPress password:

1. Open the Lightsail console.
2. Open `lovely-events-wordpress`.
3. Choose "Connect using SSH".
4. Run:

```sh
cat ~/bitnami_application_password
```

Store the password in a password manager after retrieval. Do not commit credentials, SSH keys, exported backups, or database dumps.

## Next.js CMS Backend

The Next.js app now has a backend bridge to WordPress through the WordPress REST API.

Environment variables:

```sh
WORDPRESS_API_URL=http://44.216.7.118
WORDPRESS_REVALIDATE_SECONDS=300
```

When DNS and HTTPS are ready, change `WORDPRESS_API_URL` to `https://cms.lovelyeventsgroup.com`.

Local API endpoints:

| Endpoint | Purpose |
| --- | --- |
| `/api/cms/health` | Checks whether WordPress is reachable |
| `/api/cms/media` | Lists WordPress media library images |
| `/api/cms/site` | Returns WordPress site metadata |
| `/api/cms/posts` | Lists WordPress posts |
| `/api/cms/posts/[slug]` | Returns one WordPress post by slug |
| `/api/cms/pages` | Lists WordPress pages |
| `/api/cms/pages/[slug]` | Returns one WordPress page by slug |

Current WordPress still contains the default sample post/page. Replace those in WordPress before wiring CMS content into more public frontend sections.

The homepage `Recent Highlights` section is a photo gallery. It pulls up to 12 images from the WordPress Media Library through `/api/cms/media` and fills the remaining grid with the original static highlight tiles while gallery media is still being added. If the WordPress API is unavailable or no media has been uploaded yet, the full section falls back to static tiles. Blog posts should not appear in this section.

CMS-ready blog drafts live in `content/blog/`. Draft or revise content there first, then publish approved posts in WordPress so they appear through `/api/cms/posts` and the homepage highlights section.

## Immediate WordPress Setup Checklist

- Change the default WordPress admin password.
- Set the site title to `Lovely Events`.
- Update the admin email.
- Set permalinks to "Post name".
- Create core pages: Home, About, Services, Gallery, Contact.
- Choose and configure a production-ready theme.
- Install baseline plugins for forms, backups, security, and caching.

## DNS And HTTPS Next Steps

Point the desired WordPress hostname to the static IP:

| Hostname | DNS record |
| --- | --- |
| `cms.lovelyeventsgroup.com` | A record to `44.216.7.118` |

After DNS resolves, connect over SSH and run the Bitnami certificate tool:

```sh
sudo /opt/bitnami/bncert-tool
```

Then verify:

```sh
curl -I https://cms.lovelyeventsgroup.com/wp-json/
```

Keep the apex/root domain, `lovelyeventsgroup.com`, pointed at Vercel for the Next.js frontend.

## Server Verification

Run these checks on the Lightsail instance:

```sh
php -v
mysql --version
df -h
sudo /opt/bitnami/ctlscript.sh status
```

Expected result:

- PHP is available.
- MySQL or MariaDB is available.
- Disk has enough free space for media uploads and backups.
- Apache and database services are running.

Run these checks from a local terminal after DNS and HTTPS are configured:

```sh
curl -I https://cms.lovelyeventsgroup.com/wp-json/
```

Expected result:

- The response is HTTP 200 or another valid WordPress REST API response.
- TLS certificates are valid in the browser.
- `/wp-admin` loads.

## Planned Staging + Production Model

The current deployment is a single WordPress instance. A future split can use separate production and staging instances.

| Environment | Purpose | Hostname | Instance name | Bundle |
| --- | --- | --- | --- | --- |
| Production | Live CMS for public site content | `cms.lovelyeventsgroup.com` | `lovely-cms-prod` | `micro_2_0` |
| Staging | Test WordPress, plugin, and content model changes | `staging-cms.lovelyeventsgroup.com` | `lovely-cms-staging` | `nano_2_0` |

## Optional CloudFormation Path

Use this only when replacing the current single instance with separate staging and production resources.

1. Open the AWS console and go to CloudFormation.
2. Create stack -> "With new resources (standard)".
3. Template source -> "Upload a template file".
4. Upload `infrastructure/aws/lightsail-wordpress.yml`.
5. Fill parameters.
6. Create stack and wait for completion.

When the stack finishes, copy the Outputs:

- `ProdStaticIpAddress`
- `StagingStaticIpAddress`
- `ProdInstanceNameOut`
- `StagingInstanceNameOut`

## Staging Indexing Safety

Minimum:

- WordPress Settings -> Reading -> "Discourage search engines from indexing this site"

Recommended:

- Add Basic Auth or IP allowlist on `staging-cms` so staging never gets indexed.

## Handoff Checklist

Record the following outside of the repo in the approved password manager, project doc, or secure handoff note:

| Item | Current |
| --- | --- |
| WordPress admin URL | `http://44.216.7.118/wp-admin` |
| WordPress admin username | Stored securely |
| WordPress admin password | Stored securely |
| Lightsail instance name | `lovely-events-wordpress` |
| Static IP address | `44.216.7.118` |
| DNS A record | Pending |
| Certificate contact email | Stored securely |
| Backup location | To be confirmed |

## Completion Notes

- Current WordPress hosting is created and reachable.
- DNS is not yet connected.
- HTTPS is not yet active.
- WordPress admin access has been verified by the owner.
- Server health checks still need to be captured.
