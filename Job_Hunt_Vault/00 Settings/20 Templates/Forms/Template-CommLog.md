<%* 
// Tags
let page_tags = "#log-communication"

// Get communication topic
let topic_value = await tp.system.prompt("Topic");
if (topic_value === null) { 
return;
}

// Pull list of current contacts
let name_value = (await tp.system.suggester((item) => item.basename, tp.app.vault.getFiles().filter(file => file.parent.path == '30 Records/20 People'), false, "Select contact or ESC to enter new one."));
let createNewContact = "false";
if (name_value === null) { 
	name_value_text = (await tp.system.prompt("Contact Name"));
	createNewContact = "true";
} else { name_value_text = name_value.basename};

//Select comm method
const contact_Methods = await tp.user.note_to_options(tp, "00 Settings/10 Lists/Contact-Methods.md");
let method_Value = await tp.system.suggester((item) => item, contact_Methods, false, "Select contact method.");
if (method_Value === null) { method_Value = "" };

//Select comm type
const comm_Type = await tp.user.note_to_options(tp, "00 Settings/10 Lists/Log-Communication-Type.md");
let comm_Value = await tp.system.suggester((item) => item, comm_Type, false, "What kind of communication was it?");
if (comm_Value === null) { comm_Value = "" };

//Get communication content
let comm_Content = await tp.system.prompt("Communication Text", false, null, true);
if (comm_Content == null) { comm_Content = " " };

//get communication date
let comm_Date = await tp.user.select_date(tp);

//get filename friendly filename
let file_name = await tp.user.text.filename(name_value_text)
_%>
---
Topic: <% topic_value %>
Contacts: ["[[<% name_value_text %>]]"]
Contact-Method: <% method_Value %>
Comm-Type: <% comm_Value %>
Comm_DateTime: <% comm_Date %>
---
<%* 
// Move to the Logs base.
await tp.file.move("30 Records/40 Logs/" + comm_Date + " " + method_Value + " " + comm_Value + " " + file_name) _%>

# <% method_Value + " " + comm_Value + " " + name_value_text + " re: " + topic_value %>
<% comm_Content %>

---
<% page_tags %>

<%* 
// Create new contact if it doesn't exist
if (createNewContact === "true") { 
await tp.file.create_new(tp.file.find_tfile("Template-People"), file_name, false,tp.app.vault.getAbstractFileByPath("30 Records/20 People"));
};_%>