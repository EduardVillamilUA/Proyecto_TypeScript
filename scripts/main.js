import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
let cursos = [new Curso("TypeScript", 20, 90, true, 2019), new Curso("Angular", 30, 80, true, 2020), new Curso("React", 25, 60, false, 2021), new Curso("Vue", 15, 55, false, 2022)];
export const ap = new Aprendiz("Juan Pablo", "Perez Gomez", "avatar.png", 25, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);
let aprendizTable = document.getElementById("aprendiz");
let estadisticasTable = document.getElementById("estadisticas");
let cursosTable = document.getElementById("cursos");
let btnFiltro = document.getElementById("boton-filtro");
let textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = () => {
    let texto = textoBusqueda.value.trim().toLowerCase();
    texto = (texto == null) ? "" : texto;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados = ap.cursos.filter(c => c.nombre.match(texto));
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
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
function mostrarEstadisticas(aprendiz) {
    let numeroCertificados = aprendiz.darCursoCertificados();
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
        <td> <b>Cursos Certificados:</b> </td>
        <td>${numeroCertificados}</td>
    `;
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    let tbodyCursos = document.createElement("tbody");
    let estados = cursos.map(c => c.calificacion > 60 ? "green" : "red");
    let index = 0;
    for (let curso of cursos) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${curso.nombre}</td>
            <td>${curso.horas}</td>
            <td style="color: ${estados[index]}"><strong>${curso.calificacion}</strong></td>
            <td>${curso.certificado ? "Sí" : "No"}</td>
            <td>${curso.anio}</td>
        `;
        tbodyCursos.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(tbodyCursos);
}
