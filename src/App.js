import React from "react";
import "./App.css";
import feminism from "./feminism.jpg";
function App() {
  return (
    <div className="back text-secondary">
      <nav className="navbar navbar-expand-lg navbar-light back fixed-top">
        <div className="container-fluid">
          <img src="femini.png" alt="" width="54" height="64" className="d-inline-block align-text-top rounded-circle" />
          <a className="navbar-brand fs-1" href="#"><b>Feminism</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav fs-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#program"> Our Program</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className="back container-fluid m-140 marginn" >
        <div id="Home" className="row">
          <div className="col=lg-6 p-40">
            <img src={feminism} alt="" width="600" className="d-inline-block align-text-top back margg" />
            <h2>Working towards equality for all</h2>
            <p className="fs-3 "> Join us in getting rid of negative connotation that accompanies 'feminist'.

              Our main foucus - India
            </p>
            <a href="#about" className="btn btn-secondary fs-2" type="button">Learn More</a>
          </div>

        </div>
        <div id="about" className="row " >
          <div className="col=lg-6 ">
            <h1 className="bg-secondary marg fs-1" >About Us</h1>
            <p className="fs-3"> Feminism is a non-profitable organization that is working towards getting rid of the negative working towards<br /> rid of the negative connotations that accompany the word feminist'. We believe in equality for all, <br />regardless of the gender, race, sexuality, or any other factor.Our mission is to <br />empower individuals and communities to fight for their rights and <br />create a more just and equal society.
            </p>
          </div>
        </div>
        <div id="program" className="row align-left" >
          <div className="col=lg-6 ">
            <h1 className="bg-secondary marg fs-1" >Our Program</h1>
            <ul classsName="fs-2">
              <li className="fs-3">Leadership development workshops for girls</li>
              <li className="fs-3">Career counseling and mentorship for women</li>
              <li className="fs-3">Community outreach and education on gender equality.</li>
              <li className="fs-3">Advocacy and lobbying for the policies that promote gender<br /> equality and women's right</li>
              <li className="fs-3">Financial assistance and scholarships for girls and women <br />pursuing education or enterpreneurship opportunities.</li>
            </ul>
          </div>
        </div>
        <div id="contact" className="row align-left" >
          <div className="col=lg-6 ">
            <h1 className="bg-secondary marg fs-1" >Contact US</h1>
            <form>
            <div class="mb-3">
                <label for="exampleInputname" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputname" aria-describedby="emailHelp"/>
                  {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div class="mb-3">
                <label for="exampleInputcontact" class="form-label">Contact </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <input type="textbox" width="20" height="40"class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <nav className="navbar bottom navbar-light back fs-3">
        <div className="container-fluid ">
          <div className="row text-center">
            <div className="col-md-6 fs-2">
              <p className="navbar-brand mb-0 h1 cen">@Feminism</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default App;
