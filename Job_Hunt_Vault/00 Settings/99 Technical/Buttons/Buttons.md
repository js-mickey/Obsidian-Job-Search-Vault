## Enter Info
### Wide Versions
```button
name ◎ Add Position
action <%* await tp.file.create_new(tp.file.find_tfile("Template-Position"), "NewPosition", true) %>
templater true
width 18
height 1
align left
```
^button-oihp

```button
name 👤 Add Contact
action <%* await tp.file.create_new(tp.file.find_tfile("Template-People"), "Untitled", false) %>
templater true
width 18
height 1
align left
```
^button-xihp

```button
name 🏢 Add Company
action <%* await tp.file.create_new(tp.file.find_tfile("Template-Company"), "Untitled", false) %>
templater true
width 18
height 1
align left
```
^button-yihp

```button
name 🗨️ Add Comms
action <%* await tp.file.create_new(tp.file.find_tfile("Template-CommLog"), "NewComm", true) %>
templater true
width 18
height 1
align left
```
^button-mihp

### Narrow Versions

```button
name ◎ Add Position
action <%* await tp.file.create_new(tp.file.find_tfile("Template-Position"), "NewPosition", false) %>
templater true
width 8
height 1
align left
```
^button-n-pos

```button
name 👤 Add Contact
action <%* await tp.file.create_new(tp.file.find_tfile("Template-People"), "Untitled", false) %>
templater true
width 8
height 1
align left
```
^button-n-cont

```button
name 🏢 Add Company
action <%* await tp.file.create_new(tp.file.find_tfile("Template-Company"), "Untitled", false) %>
templater true
width 8
height 1
align left
```
^button-n-comp

```button
name 🗨️ Add Comms
action <%* await tp.file.create_new(tp.file.find_tfile("Template-CommLog"), "NewComm", true) %>
templater true
width 8
height 1
align left
```
^button-n-comm

```button
name 📝 Add Journal
action <%* await tp.file.create_new(tp.file.find_tfile("Template-Note"), "Untitled", true) %>
templater true
width 8
height 1
align left
```
^button-n-journal

## Navigate
```button
name 🏠 Go Home
type link
action obsidian://open?vault=Job_Hunt_Vault&file=Dashboard
width 8
height 1
align left
customColor #f2f2f2
customTextColor #000000
```
^button-n-dashboard


```button
name 🎯 Positions
type link
action obsidian://open?vault=Job_Hunt_Vault&file=Position_Base.base
customColor #f2f2f2
customTextColor #000000
width 8
height 1
align left
```
^button-positions

```button
name 👤 Contacts
type link
action obsidian://open?vault=Job_Hunt_Vault&file=Contacts_Base.base
customColor #f2f2f2
customTextColor #000000
width 8
height 1
align left
```
^button-contacts

```button
name 🗨️ Comms
type link
action obsidian://open?vault=Job_Hunt_Vault&file=Communication_Base.base
customColor #f2f2f2
customTextColor #000000
width 8
height 1
align left
```
^button-comms

```button
name 🏢 Companies
type link
action obsidian://open?vault=Job_Hunt_Vault&file=Company_Base.base
customColor #f2f2f2
customTextColor #000000
width 8
height 1
align left
```
^button-companies

```button
name 📝 Journal Entries
type link
action obsidian://open?vault=Job_Hunt_Vault&file=Journal_Base.base
customColor #f2f2f2
customTextColor #000000
width 8
height 1
align left
```
^button-journals
