import './ListPage.css';
import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL:`https://sheetdb.io/api/v1/t0tdd9q5rqp2u`
});

export default function ListPage() {
  return (
    <div className="body">
    <h1>List page</h1>
  <table className="rwd-table">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Gender</th>
        <th>Date of birth</th>
        <th>Position</th>
        <th>Annual income</th>
      </tr>
    </tbody>
  </table>
  <a href="/form" target="_blank">Add new data</a>
  <script src="script.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
  </div>
  );
}

const tbody = document.querySelector('tbody');
let data = {};
let i = 0;


    api.get('https://sheetdb.io/api/v1/t0tdd9q5rqp2u')
  .then( response => {
      response.data.forEach((element) => {
         data = element;
         const tbl = document.querySelector(".rwd-table");
    // (C2) ROWS & CELLS
    let row = `<tr id="${[i]}">
        <td>${data.Name}</td>
        <td>${data.Surname}</td>
        <td>${data.Gender}</td>
        <td>${data.Dateofbirth}</td>
        <td>${data.Position}</td>
        <td>${data.Annualincome}</td>
          </tr>
      `
      document.querySelector(".rwd-table").innerHTML += row;
      //Add event listener to eaceh generated row
    let rows = document.getElementById(`${i}`);
    rows.addEventListener("click", () => {
      window.location.href = '/components/details';
    });
    i++;
      });
  });

  