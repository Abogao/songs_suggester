import React, { Component } from "react";
import Bandas from "./Bandas";

const bandas = [
  {
    name: "Pink Floyd",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F22%2F390975-Pink_Floyd-748x421.jpg&f=1&nofb=1",
    members: [
      {
        nombre: "David gilmour",
        link: "https://es.wikipedia.org/wiki/David_Gilmour",
      },
      {
        nombre: "Richard Wright",
        link: "https://es.wikipedia.org/wiki/Richard_Wright_(músico)",
      },
      {
        nombre: "Roger Waters",
        link: "https://es.wikipedia.org/wiki/Roger_Waters",
      },
      {
        nombre: "Nick Mason",
        link: "https://es.wikipedia.org/wiki/Nick_Mason",
      },
    ],
  },
  {
    name: "The National",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fmusic%2Ffirstlisten%2F2010%2F05%2Fthenational%2Fthenational_wide-54addc5e2d223f9644266a0ade11bf6ac165f23d.jpg%3Fs%3D1400&f=1&nofb=1",
    members: [
          {    nombre:"Matt Berninger",
               link:"https://en.wikipedia.org/wiki/Matt_Berninger"
              },
          {    nombre:"Aaron Dessner",
               link:"https://es.wikipedia.org/wiki/Aaron_Dessner"
              },
          {    nombre:"Bryce Dessner",
                link:"https://en.wikipedia.org/wiki/Bryce_Dessner"
              },
          {    nombre:"Bryan Devendorf",
               link:"https://en.wikipedia.org/wiki/Bryan_Devendorf"
              },
          {    nombre:"Scott Devendorf",
               link:"https://en.wikipedia.org/wiki/Scott_Devendorf"
              },
    ],
  },
  {
    name: "The Smiths",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rockandpop.cl%2Fwp-content%2Fuploads%2F2018%2F02%2Fsip-the-smiths-01.jpg&f=1&nofb=1",
    members: [
      {
        nombre:"Morrissey",
        link:"https://es.wikipedia.org/wiki/Morrissey"
      },
      {
        nombre:"Johnny Marr",
        link:"https://es.wikipedia.org/wiki/Johnny_Marr"
      },
      {
        nombre:"Mike Joyce",
        link:"https://es.wikipedia.org/wiki/Mike_Joyce_(músico)"
      },
      {
        nombre:"Andy Rourke",
        link:"https://es.wikipedia.org/wiki/Andy_Rourke"
      },
      {
        nombre:"Craig Gannon",
        link:"https://en.wikipedia.org/wiki/Craig_Gannon"
      }
    ],
  },
  {
    name: "Metallica",
    img:"https://i.pinimg.com/236x/6a/db/af/6adbaf92f069d6d84eed5ffceaca7eb4.jpg",
    members: [
      {
        nombre: "Lars Ulrich",
        link: "https://es.wikipedia.org/wiki/Lars_Ulrich",
      },
      {
        nombre: "James Hetfield",
        link: "https://es.wikipedia.org/wiki/James_Hetfield",
      },
      {
        nombre: "Kirk Hammett",
        link: "https://es.wikipedia.org/wiki/Kirk_Hammett",
      },
      {
        nombre: "Robert Trujillo",
        link: "https://es.wikipedia.org/wiki/Robert_Trujillo",
      },
    ],
  },
];


class InfoLio extends Component {
  render() {
    return (
      <div>
        <Bandas listaBandas={bandas}></Bandas>
      </div>
    );
  }
}

export default InfoLio;