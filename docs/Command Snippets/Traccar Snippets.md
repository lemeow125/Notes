#### Sinotrak 906L
- Set APN (SMART)
```sms
8030000 internet
```
- Set Server
	- Replace ADDRESS with your dynamic public IP address
	- Don't set this to your domain directly as this will fail over SMS
```sms
8040000 ADDRESS 5013
```
- Set to proper dynamic domain via Traccar custom command once you've confirmed it's working via Traccar
```sms
8040000 traccar.06222001.xyz 5013
```
- Set control/admin number
```sms
// 09331689692 - Phone number
// 0000 - Default password
093316896920000 1
```
- Change password
```sms
// 1234 - New password
// 0000 - Old/default password
77712340000
```