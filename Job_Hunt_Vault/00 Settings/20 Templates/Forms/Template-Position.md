<%* 
//Set page tags
let page_tags = "#position"

/* Get job title*/ 
let jobtitle_value = await tp.system.prompt("Job Title");
const file = tp.file.path().toString();
if (jobtitle_value === null) { 
return;
}
let posFilename = await tp.user.text.filename(jobtitle_value);

/* Pull list of current companies */
let corpname_value = (await tp.system.suggester((item) => item.basename, tp.app.vault.getFiles().filter(file => file.parent.path == '30 Records/30 Companies'), false)); 
if (corpname_value === null) { 
corpname_text = (await tp.system.prompt("Company Name"));
} else { corpname_text = corpname_value.basename};

// Set filename
posFilename = posFilename + " " + await tp.user.text.filename(corpname_text);

/* Get Position Description */
let ps_value = await tp.system.prompt("Position Description", null, false, true);
if (ps_value === null) {ps_value = ""};

// Get Qualifications
let qual_value = await tp.system.prompt("Qualifications", null, false, true);
if ( !(qual_value === null)) {
quals = tp.user.linesplit(qual_value);
} else { quals = "" }

// Get Preferred Qualifications
let pqual_value = await tp.system.prompt("Preferred Qualifications", null, false, true);
if ( !(pqual_value === null)) { p_quals = tp.user.linesplit(pqual_value);
} else { p_quals = "" } 

// Get Salary Range
let sal_value = await tp.system.prompt("Salary Range");
if (sal_value === null) {sal_value = ""}

/* Get job url*/
let job_url = await tp.system.prompt("Link to the job posting")  

//Select job source
const sourceOptions = await tp.user.note_to_options(tp, "00 Settings/10 Lists/Sources.md");
let source_value = await tp.system.suggester((item) => item, sourceOptions);
if (source_value === null) { source_value = "" };
_%>
---
Job-Title: <%jobtitle_value %>
Company: "[[<% corpname_text %>]]"
Job-URL: <% job_url %> 
Salary-Range: <% sal_value %>
App-Stage: Reviewing
Source: <% source_value %>
---
<%* 
// Move to Record Folder
await tp.file.move("30 Records/10 Positions/" + posFilename);
// Create Company Record if none exists
if (corpname_value === null && !(jobtitle_value === null)) { await tp.file.create_new(tp.file.find_tfile("Template-Company"), corpname_text, false,tp.app.vault.getAbstractFileByPath("30 Records/30 Companies"));} _%>
#  [[<% corpname_text %>]] [<% jobtitle_value %>](<% job_url %>)
> [!tip] Stage: `=this.App-Stage`

### Tasks

---
## Position

### Position Description
<% ps_value %>
#### Qualifications
<% quals %>
#### Preferred Qualifications
<% p_quals %>
### Analysis

#### Key Terms

#### Key Skills and Relevant Experience

---
## Tailored Content
### Experience

### Notes

### CV

### Comms

---
##### Scratchpad



---
<% page_tags %>