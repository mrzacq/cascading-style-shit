# SEND EMAIL USING NODEMAILER

## # Notes

if account from auth transporter doesn't accept by gmail it's maybe because in
[Permission setting](https://myaccount.google.com/lesssecureapps) is turned off to make it allowed by gmail sending email from nodemailer just turn it on

## Example email already sent

```
{
  accepted: [ 'to@gmail.com' ],
  rejected: [],
  envelopeTime: 590,
  messageTime: 510,
  messageSize: 301,
  response: '250 2.0.0 OK  1621741942 x23sm11714834pje.52 - gsmtp',
  envelope: {
    from: 'from@gmail.com',
    to: [ 'to@gmail.com' ]
  },
  messageId: '<cb9bf46f-82d1-4b15-4e84-c3bcadf0fc29@gmail.com>'
}
```