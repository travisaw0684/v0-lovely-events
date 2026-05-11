# WordPress Environment Handoff

Use this template after the Lightsail instances are provisioned. Keep real secrets in the approved password manager or secrets vault, not in this file.

## Current Instance

| Field | Value |
| --- | --- |
| Environment | Current single WordPress instance |
| WordPress URL | `http://44.216.7.118` |
| Admin URL | `http://44.216.7.118/wp-admin` |
| Lightsail instance | `lovely-events-wordpress` |
| Static IP | `44.216.7.118` |
| Static IP resource | `lovely-events-wordpress-ip` |
| AWS account | `613208686164` |
| AWS region | `us-east-1` |
| Admin username | Stored in password manager |
| Admin password | Stored in password manager |
| Certificate email | Stored in password manager |
| REST API health check | `http://44.216.7.118/wp-json/` |

Status as of May 5, 2026:

- WordPress instance is created and reachable.
- Static IP is allocated and attached.
- Owner has signed in to WordPress admin.
- DNS and HTTPS are still pending.

## Production

| Field | Value |
| --- | --- |
| Environment | Production |
| WordPress URL | `https://cms.lovelyeventsgroup.com` |
| Admin URL | `https://cms.lovelyeventsgroup.com/wp-admin` |
| Lightsail instance | `lovely-cms-prod` |
| Static IP | Pending CloudFormation output |
| DNS record | `cms.lovelyeventsgroup.com` A record |
| Admin username | Stored in password manager |
| Admin password | Stored in password manager |
| Certificate email | Stored in password manager |
| REST API health check | `https://cms.lovelyeventsgroup.com/wp-json/` |

## Staging

| Field | Value |
| --- | --- |
| Environment | Staging |
| WordPress URL | `https://staging-cms.lovelyeventsgroup.com` |
| Admin URL | `https://staging-cms.lovelyeventsgroup.com/wp-admin` |
| Lightsail instance | `lovely-cms-staging` |
| Static IP | Pending CloudFormation output |
| DNS record | `staging-cms.lovelyeventsgroup.com` A record |
| Admin username | Stored in password manager |
| Admin password | Stored in password manager |
| Certificate email | Stored in password manager |
| REST API health check | `https://staging-cms.lovelyeventsgroup.com/wp-json/` |

## Provisioning Evidence

Attach screenshots or notes in Linear for:

- CloudFormation stack completion.
- Lightsail production and staging instances.
- Static IP assignments.
- DNS records.
- Valid HTTPS certificates.
- WordPress admin login success.
- REST API health check responses.

## Server Check Results

Capture the command output for both environments:

```sh
php -v
mysql --version
df -h
sudo /opt/bitnami/ctlscript.sh status
```

## Handoff Notes

- Production changes should be made only after staging verification.
- Staging should have search indexing disabled.
- Staging should use Basic Auth or an IP allowlist before public launch.
- Backups and restore testing are tracked in TRA-13.
