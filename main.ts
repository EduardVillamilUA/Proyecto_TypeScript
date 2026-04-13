import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [new Curso("TypeScript", 20, 90, true, 2019), new Curso("Angular", 30, 80, true, 2020)];

export const ap = new Aprendiz("Juan Pablo", "Perez Gomez", "avatar.png", 25, NivelEducativo.UNIVERSITARIO, cursos);

let aprendizTable: HTMLElement = document.getElementById("aprecostondiz")!;

mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
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