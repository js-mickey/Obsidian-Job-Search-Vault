<%* 
// Set page tags
let page_tags = "#company"

// Check if the file is untitled; if so, request Company Name
if (tp.file.title.startsWith("Untitled") || tp.file.title.startsWith("null")) {
	company_name = await tp.system.prompt("Enter Company Name");
	if (company_name === null) { 
		return;
		}
	company_name = tp.user.text.filename(company_name);
	tp.file.rename(company_name);
	} 
	else { company_name = tp.file.title };

// Get Industries value
const industry_options = await tp.user.note_to_options(tp, "00 Settings/10 Lists/Industries.md");
let industry_value = await tp.system.suggester((item) => item, industry_options, false, "Select Industry")

// Request Company Description
let company_desc = await tp.system.prompt("Company Description", null, false, true) _%>
---
Company: <% company_name %>
Industry: <% industry_value %>
---
<%* 
// Move to Record folder
await tp.file.move("30 Records/30 Companies/" + company_name);
_%>
# <% company_name %>
<% company_desc %>

---
<% page_tags %>