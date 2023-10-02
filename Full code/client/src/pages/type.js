import React from "react";
import Navigation from "./Navigation";
import "../styles/type.css"; 
import Dropdown from "react-bootstrap/Dropdown";
import { RiPencilLine } from "react-icons/ri";
import TextEditor from "./TextEditor";

function Page1() {
  const [num, setNum] = React.useState("");
  const [dnum, setdNum] = React.useState("");
  const [showEditor, setShowEditor] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState("");
  const [selectedTone, setSelectedTone] = React.useState("");
  const [selectedUseCase, setSelectedUseCase] = React.useState("");
  const [productname, setProductname] = React.useState("");
  const [editorData, setEditorData] = React.useState(null);
  const [productDiscription , setProductDiscription] = React.useState("")

  const [apiResponse, setApiResponse] = React.useState(
    {
      selectedLanguage ,
      selectedTone,
      selectedUseCase,
      productname ,
      productDiscription 
    })
  


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  
  const handleDescriptionChange = (event) => {
    setProductDiscription(event.target.value);
  };
  const handleToneChange = (event) => {
    setSelectedTone(event.target.value);
  };

  const handleUseCaseChange = (event) => {
    setSelectedUseCase(event.target.value);
  };

  const handleAPICall = () => {
    setShowEditor(!showEditor);
  };


  React.useEffect(() => {
    if (showEditor) {
      // Perform API call with the collected values
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8081/api/data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              selectedLanguage,
              selectedTone,
              selectedUseCase,
              productname,
              productDiscription
            }),
          });

          const data = await response.json();
          console.log(data);
          setEditorData(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [selectedLanguage, selectedTone, selectedUseCase, productname, showEditor]);


  return (
    <div>
      <Navigation />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 custom-border-right">
            {" "}
            {/* Add custom CSS class for right border */}
            {/* <h3>Column 1</h3> */}
            <div className="row">
              <div className="col-6">
                <div className="container mt-4">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Select Language
                  </label>
                  <select
                    className="d-flex justify-content-start"
                    id="selectBox"
                    
                    onChange={handleLanguageChange}

                  >
                    <option value="Sinhala">Sinhala</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                  </select>
                  <p>{console.log(selectedLanguage)}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="container mt-4">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Select Tone
                  </label>
                  <select
                    className="d-flex justify-content-start"
                    id="selectBox"
                    value={selectedTone}
                    onChange={handleToneChange}
                  >
                    <option value="" disabled>
                      Select tone
                    </option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                    <option value="Funny">Funny</option>
                  </select>
                  <p>{console.log(selectedTone)}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="container mt-1">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Choose use case
                  </label>
                  <select
                    className="d-flex justify-content-start"
                    id="selectBox"
                    value={selectedUseCase}
                    onChange={handleUseCaseChange}
                  >
                    <option value="" disabled>
                      Choose use case
                    </option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">Youtube</option>
                    <option value="Tiktok">Tiktok</option>
                  </select>
                  <p>{console.log(selectedUseCase)}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="container mt-1">
                  <label
                    className="d-flex justify-content-start mb-2"
                    htmlFor="selectBox"
                  >
                    Product name
                  </label>
                  <input
                    className="d-flex justify-content-start"
                    type="text"
                    onChange={(e) => {
                      setNum(e.target.value);
                      setProductname(e.target.value);
                    }}
                    value={productname}
                    maxlength="100"
                    id="product-name"
                    name="product_name"
                    required
                  />
                  <p className="d-flex justify-content-end">
                    {0 + num.length}/100
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div class="input-textarea text">
                  <div className="container mt-1">
                    <label
                      className="d-flex justify-content-start mb-2"
                      for="product-description"
                    >
                      Product Description
                    </label>
                    <textarea
                      onChange={handleDescriptionChange}
                      id="product-description"
                      name="product_description"
                      rows="4"
                      maxlength="500"
                      required
                    ></textarea>
                    <p className="d-flex justify-content-end">
                      {0 + dnum.length}/500
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="container mt-1">
                  <button
                    className="submitbtn"
                    style={{ width: "100%", padding: "9px" }}
                    onClick={handleAPICall}
                  >
                    <RiPencilLine style={{ marginRight: "5px" }} />
                    Ryte Me
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8" style={{paddingRight:"0px"}}>
            {showEditor ? (
              <TextEditor data={editorData}/>
            ) : (
              <div className="line-left">
                <div class="container mt-4">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Items</th>
                        <th>Words</th>
                        <th>Modified</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product 1</td>
                        <td>10</td>
                        <td>500</td>
                        <td>2023-07-20</td>
                      </tr>
                      <tr>
                        <td>Product 2</td>
                        <td>5</td>
                        <td>250</td>
                        <td>2023-07-19</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
