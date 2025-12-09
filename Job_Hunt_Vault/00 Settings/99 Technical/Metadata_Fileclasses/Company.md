---
limit: 20
mapWithTag: true
icon: building
tagNames:
  - company
filesPaths:
bookmarksGroups:
excludes:
extends:
savedViews: []
favoriteView:
fieldsOrder:
  - hLMb67
  - sudgGU
  - pb733D
  - C3RegA
  - gko08Q
  - LGisxD
version: "2.16"
fields:
  - name: Address
    type: Input
    options:
      template: "{{Company Physical Address}}"
    path: ""
    id: gko08Q
  - name: Industry
    type: Select
    options:
      sourceType: ValuesListNotePath
      valuesList: {}
      valuesListNotePath: 00 Settings/10 Lists/Industries.md
    path: ""
    id: C3RegA
  - name: Email
    type: Input
    options:
      template: "{{Email Address}}"
    path: ""
    id: pb733D
  - name: Phone
    type: Input
    options:
      template: "{{Phone Number}}"
    path: ""
    id: sudgGU
  - name: Positions
    type: Lookup
    options:
      autoUpdate: false
      dvQueryString: dv.pages('#position')
      targetFieldName: Company
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: LGisxD
  - name: Contacts
    type: Lookup
    options:
      autoUpdate: false
      dvQueryString: dv.pages('#person')
      targetFieldName: Company
      outputType: LinksList
      builtinSummarizingFunction: Count
      customListFunction: page.file.name
      customSummarizingFunction: return pages.length
      summarizedFieldName: ""
    path: ""
    id: hLMb67
---
