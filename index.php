<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css">
    
    <title>Generate Dynamic Form</title>
  </head>
  <body>
    <h2 class="text-center p-4 bg-light">Generate Dynamic Form</h2>
    <div class="row m-0">
       <div class="col-12 d-flex d-flex justify-content-center">
            <div class="col-6">
                <form id="proceedToGenerate">
                    <label for="basic-url" class="form-label">Upload Your JSON file</label>
                    <div class="input-group">
                        <input type="file" name="jsonData" id="uploadedJsonFile" class="form-control" required>
                        <button class="btn btn-outline-secondary" type="submit" id="inputGroupFileAddon04">Proceed</button>
                    </div>
                </form>
            </div>
        </div>
        
        <div class="col-12 d-flex d-flex justify-content-center">
            <div class="col-6" id="formContainer">
                <h2 class="text-center p-4 d-none" id="formHeading">Generated Form</h2>
                <form id="generatedForm" class="d-none"></form>
            </div>
        </div>
    </div>


    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Main Js File -->
    <script src="js/main.js"></script>
  </body>
</html>