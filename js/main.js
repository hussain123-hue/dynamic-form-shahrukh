// Code in Vanilla Javascript
const genForm = document.getElementById('generatedForm');

document.getElementById("proceedToGenerate").addEventListener("submit", function(e) {
    e.preventDefault();

    const jsonFile = document.getElementById("uploadedJsonFile").files[0];
    const readFile = new FileReader();
    readFile.onload = function(e) {
    const content = e.target.result;
    
    const fieldData = JSON.parse(content); // Parse JSON
    console.log(fieldData.fields)
        if (fieldData.fields.length > 0) { // check if is not empty
            
            var allFields = fieldData.fields;
            createFormGroup(allFields);
            // const sortByOrder = allFields.sort(function(a, b) { // Sort by order value
            //     return parseFloat(a.order) - parseFloat(b.order);
            // });
        }else{
            alert('Please Upload File With Field!');
        };
    }
    readFile.readAsText(jsonFile);
});

function createFormGroup(allFields){

    let html = '';
    allFields.forEach(field => {
        var isReadOnly = field.isReadonly ? "readonly" : "";
        var isRequired = field.isRequired ? "required" : "";
     
        switch (field.type) {
            case "date":
                html += '<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">'+field.label+'</label><input type="date" class="form-control" id="exampleFormControlInput1" '+isReadOnly+' '+isRequired+'></div>';
              break;

            case "dropdown":
                html += '<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">'+field.label+'</label><select class="form-control" '+isReadOnly+' '+isRequired+'>';
                if(field.items.length > 0){
                    field.items.forEach(option => {
                        html += '<option value="'+option.value+'">'+option.text+'</option>'; 
                    });
                }
                html += '</select></div>';
              break;

            case "radio":
                html += '<div class="mb-3"><label class="form-label mr-2">'+field.label+'</label>';
                if(field.items.length > 0){
                    field.items.forEach(item => {
                        html += '<input class="form-check-input ms-1" type="radio" name="'+field.name+'" id="flexRadioDefault1"><label class="form-check-label ms-1" for="flexRadioDefault1" value="'+item.value+'">'+item.text+'</label>';
                    });
                }
                html += '</div>';
              break;

            case "number":
                html += '<div class="mb-3"><label class="form-label">'+field.label+'</label><input type="number" class="form-control" '+isReadOnly+' '+isRequired+'></div>';
              break;

            case "checkbox":
                html += '<div class="mb-3"><label class="form-label">'+field.label+'</label><input type="checkbox" class="form-check-input ms-1" '+isReadOnly+' '+isRequired+'></div>';
              break;

            default:
                html += '<div class="mb-3"><label class="form-label">'+field.label+'</label><input type="'+field.type+'" class="form-control" '+isReadOnly+' '+isRequired+'></div>';
              break;
          }
    });
    html += '<button class="btn btn-primary my-2" type="submit">Submit</button>';
    genForm.innerHTML = '';
    genForm.innerHTML = html;
    genForm.classList.remove('d-none');
    document.querySelector('#formHeading').classList.remove('d-none');
}