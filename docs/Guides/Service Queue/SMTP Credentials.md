### Overview
SMTP is the industry standard for sending emails programmatically today. There are many SMTP providers available throughout the web. The majority of them however require you to purchase and set up your own FQDN (Fully Qualified Domain Name). This means purchasing a minimum 1 year lease for a domain such as `bernasol.com` and paying for custom domain hosting per month/year for the following emails

- `noreply@bernasol.com`
- `keannu@bernasol.com`
- `careers@bernasol.com`

Costs can very quickly add up between domain registration and custom email domain hosting so it's important to choose your provider carefully.

### Email Testing  
For testing sign-ups and activation emails, you can use [Inbucket](https://github.com/inbucket/inbucket). I have an instance available for general use [here](https://test.mail.keannu5.duckdns.org/).

![image.png](_resources/SMTP%20Credentials/8e936de4bc25c5dbbbc2e5a1e2cdfd1f_MD5.jpg)

There are no daily/monthly send/receive limits for email testing using the Inbucket server provided above unlike actual SMTP providers.

Use the following credentials for reference in your `.env` file.
```
EMAIL_HOST = 'test.mail.06222001.xyz'
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = '1025'
EMAIL_TLS = 'False'
```

### Email Quotas
All SMTP providers and hosts implement email quotas. This limits the number of emails you can send per hour, day, or month.

The following providers implement these limits for free plans (relevant as of 08/28/2024)

- [Mailtrap](https://mailtrap.io/) (requires a custom domain) - 200/day, 1000/month
![image.png](_resources/SMTP%20Credentials/1dcfe0ddddfdbf3b7c7de84db56e6c78_MD5.jpg)

- [Sendgrid ](https://sendgrid.com/en-us/pricing)(requires a custom domain) - 100/day
![image.png](_resources/SMTP%20Credentials/cbeb0571f5b9d9e839abf9464c109ef8_MD5.jpg)
- [Google ](https://support.google.com/mail/answer/22839?hl=en#zippy=%2Cyou-have-reached-a-limit-for-sending-mail)(via Gmail account) - 500/day
![image.png](_resources/SMTP%20Credentials/82a942a9a088a0101bd9f8d4296082d2_MD5.jpg)

### Managed Email  
The service queue project provides SMTP credentials for use with services.

![image.png](_resources/SMTP%20Credentials/396af3db5b75712e4893180fd8fd483f_MD5.jpg)

If you are having trouble setting up your own SMTP credentials, via Google or otherwise, please reach out so that we can provision you your own credentials. The 500/day send limit will be shared amongst all users for this shared email.

### Google Setup
#### Choosing or Creating an Account
When setting up a Google account for SMTP, you can choose to use an existing personal account such as `keannubernasol@gmail.com`

You can also opt to create a dedicated account such as `noreply.servicequeue@gmail.com`. This will however require you to verify the account using a phone number.

![image.png](_resources/SMTP%20Credentials/bafcb1357ed6182ea491a6fc3789fff2_MD5.jpg)

A maximum of 4 accounts can be verified per number. Going over this limit will result in the following message.

![image.png](_resources/SMTP%20Credentials/6f7f19fdde3b194ed4fd6bec1179c573_MD5.jpg)
#### Setting up SMTP Credentials
Before you can set up SMTP Credentials, you will have to set up 2-Step Verification for your account under the [security ](https://myaccount.google.com/security)section

![image.png](_resources/SMTP%20Credentials/27d88c68417529a459e0909ddcf46493_MD5.jpg)

You will need to add a 2-Step Verification phone, recovery phone, and recovery email if you have not done so already.

Once this is set up, only then will the App Password section be available for your account.

![image.png](_resources/SMTP%20Credentials/4d9c6348e505a9cd713a95c4f679892b_MD5.jpg)

In practice, every app should have their own separate app password. If you have two backend APIs, you should create two app passwords.

![image.png](_resources/SMTP%20Credentials/1ed0f37eb120f48d61f107ea99086f30_MD5.jpg)

After creation, you will be given the password separated in spaces. You can remove the spaces and use this in your `.env` file. A reference is provided below.
```
PROD_EMAIL_HOST = "smtp.gmail.com"
PROD_EMAIL_HOST_USER = "noreply.servicequeue@gmail.com"
PROD_EMAIL_HOST_PASSWORD = ""
PROD_EMAIL_HOST = "587"
PROD_EMAIL_TLS = "True"
```

SMTP setup after should this should be dependent on the framework you're using (Django, Laravel, etc.). Be sure to test your email implementation via the Inbucket server mentioned previously or through a different mail testing service before using real SMTP credentials.