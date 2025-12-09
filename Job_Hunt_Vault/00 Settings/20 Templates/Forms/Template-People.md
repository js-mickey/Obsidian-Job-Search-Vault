<%* 
// Set page tags
let page_tags = "#person"
// Get contact's name

// Check if the file is untitled; if so, request name
if (tp.file.title.startsWith("Untitled") || tp.file.title.startsWith("null")) {
	name_value = await tp.system.prompt("Enter Person's Name");
	if (name_value === null) { 
		return;
		}
	name_value = tp.user.text.filename(name_value);
	tp.file.rename(name_value);
	} else { name_value = tp.file.title };

// Pull list of current companies
let corpname_value = (await tp.system.suggester((item) => item.basename, tp.app.vault.getFiles().filter(file => file.parent.path == '30 Records/30 Companies'), false, "Select Company Name or hit ESC to enter new company")); 
if (corpname_value === null) { 
corpname_text = (await tp.system.prompt("Company Name"));
} else { corpname_text = corpname_value.basename};

// Clean filename
let file_name = await tp.user.text.filename(name_value);
_%>
---
Name: <%name_value %>
Company: "[[<% corpname_text %>]]"
---
<%* 
// Move File
await tp.file.move("30 Records/20 People/" + file_name);
//Create Company if None Exists
if (corpname_value === null && !(name_value === null) && !(corpname_text === null)) { 
await tp.file.create_new(tp.file.find_tfile("Template-Company"), corpname_text, false,tp.app.vault.getAbstractFileByPath("30 Records/30 Companies"));} _%>
# <% name_value %>
[[<% corpname_text %>]]

---
<% page_tags %>