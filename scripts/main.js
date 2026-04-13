import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export const ap = new Aprendiz("Juan Pablo", "Perez Gomez", "avatar.png", 25, NivelEducativo.UNIVERSITARIO);
let aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `
        <tr>
            <td colspan="2"><img src="${aprendiz.avatar}" alt="Avatar de ${aprendiz.nombres} ${aprendiz.apellidos}" height="100"></td>
        </tr>
        <tr>
            <td>Nombres:</td>
            <td>${aprendiz.nombres}</td>
        </tr>
        <tr>
            <td>Apellidos:</td>
            <td>${aprendiz.apellidos}</td>
        </tr>
        <tr>
            <td>Nivel Educativo:</td>
            <td>${aprendiz.nivelEducativo}</td>
        </tr>
        <tr>
            <td>Edad:</td>
            <td>${aprendiz.edad}</td>
        </tr>
    `;
    aprendizTable.appendChild(tbodyAprendiz);
}
