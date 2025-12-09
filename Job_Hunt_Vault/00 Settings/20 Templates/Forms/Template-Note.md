<%* let page_tags = "#note" _%>
<%* let title_value = await tp.system.prompt("Note Title / Topic");
if (title_value === null) { 
return;
}
let titleFilename = await tp.user.text.filename(title_value); 
await tp.file.move("10 Journal/" + titleFilename) _%>
# <% title_value %>
<%* tp.file.cursor(0) %>

---
<% page_tags %>