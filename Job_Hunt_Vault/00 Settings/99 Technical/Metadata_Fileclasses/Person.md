---
limit: 20
mapWithTag: true
icon: circle-user-round
tagNames:
  - person
filesPaths:
bookmarksGroups:
excludes:
extends:
savedViews: []
favoriteView:
fieldsOrder:
  - kSWUCI
  - v0v06Z
  - BZFOD7
  - OX3gRo
  - hevFDn
  - ShaDM5
  - eHRPgp
version: "2.15"
fields:
  - name: Phone
    type: Input
    options: {}
    path: ""
    id: eHRPgp
  - name: Email
    type: Input
    options:
      template: "{{Email Address}}"
    path: ""
    id: ShaDM5
  - name: Relationship
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Contact-Strength.md
    path: ""
    id: hevFDn
  - name: Role
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Contact-Roles.md
    path: ""
    id: OX3gRo
  - name: Name
    type: Input
    options:
      template: "{{Contact's Name}}"
    path: ""
    id: v0v06Z
  - name: Company
    type: File
    options:
      dvQueryString: dv.pages('#company')
    path: ""
    id: BZFOD7
  - name: Related-Positions
    type: Lookup
    options:
      autoUpdate: false
      dvQueryString: dv.pages('#position')
      targetFieldName: Contacts
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: kSWUCI
---
