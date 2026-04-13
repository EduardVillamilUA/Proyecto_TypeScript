import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [new Curso("TypeScript", 20, 90, true, 2019), new Curso("Angular", 30, 80, true, 2020), new Curso("React", 25, 85, false, 2021), new Curso("Vue", 15, 70, true, 2022)];

export const ap = new Aprendiz("Juan Pablo", "Perez Gomez", "avatar.png", 25, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = () => {
    let texto: string = textoBusqueda.value;
    texto = (texto==null)?"":texto;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(texto) );
    mostrarCursosAprendiz(cursosFiltrados);
};

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);



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

function mostrarEstadisticas(aprendiz: Aprendiz): void {
    let numeroCertificados:number = aprendiz.darCursoCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `
        <td> <b>Cursos Certificados:</b> </td>
        <td>${numeroCertificados}</td>
    `;
    estadisticasTable.appendChild(trElement);
}

function mostrarCursosAprendiz(cursos: Curso[]): void {
    let tbodyCursos: HTMLElement = document.createElement("tbody");
    for (let curso of cursos) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${curso.nombre}</td>
            <td>${curso.horas}</td>
            <td>${curso.calificacion}</td>
            <td>${curso.certificado ? "Sí" : "No"}</td>
            <td>${curso.anio}</td>
        `;
        tbodyCursos.appendChild(trElement);
    }
    cursosTable.appendChild(tbodyCursos);
}