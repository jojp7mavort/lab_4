// Definición de un array de especializaciones
let cursosEspecializados = ["Fundamentos de Desarrollo Web", "Desarrollador Frontend", "Desarrollador Backend", "Desarrollador FullStack"];

console.log("### Iteraciones ###");

// Iteraciones

// Usando 'for...in' para recorrer índices
for (let indice in cursosEspecializados) {
    console.log("Índice:", indice, "\nContenido:", cursosEspecializados[indice]);
}

// Usando 'for...of' para recorrer valores directamente
for (let curso of cursosEspecializados) {
    console.log(curso);
}

console.log("### Métodos de Array ###");

// Métodos de Array

// Añadir un elemento al final
cursosEspecializados.push("Cursos Adicionales");
console.log(cursosEspecializados);

// Añadir un elemento al inicio
cursosEspecializados.unshift("Curso Inicial");
console.log(cursosEspecializados);

// Eliminar el último elemento
cursosEspecializados.pop();
console.log(cursosEspecializados);

// Eliminar el primer elemento
cursosEspecializados.shift();
console.log(cursosEspecializados);

// Crear una copia del array dentro de un rango específico
let subArray = cursosEspecializados.slice(1, 3);
console.log(subArray);

// Verificar si la variable es un array
console.log(Array.isArray(cursosEspecializados));

// Obtener la longitud del array
console.log(cursosEspecializados.length);

console.log("### Destructuración ###");

// Destructuración de Arrays

// Asignar los primeros elementos a variables individuales
let [primero, segundo, tercero] = cursosEspecializados;
console.log(`${primero} - ${segundo} - ${tercero}`);

console.log("### Operadores ###");

// Operador Rest
console.log("   Operador Rest ###");
// Agrupar los elementos restantes en un nuevo array
let [primeroRest, segundoRest, ...resto] = cursosEspecializados;
console.log(`${primeroRest} - ${segundoRest} -`, resto);

// Operador Spread
// Combinar arrays o copiar arrays
let tarifasAnuales = [299, 399];
let combinacion = [...tarifasAnuales, ...cursosEspecializados];
console.log("   Operador Spread ###");
console.log("Combinación:", combinacion);

// Copia del array usando spread
let copiaCursos = [...cursosEspecializados];
console.log("Copia:", copiaCursos);

// Definición de un objeto complejo
let programaDesarrollo = {
    introduccionWeb: {
        nombre: "Introducción al Desarrollo Web",
        módulos: [
            {
                nombre: "Conceptos Básicos de Programación y Web",
                lecciones: 10,
                duraciónHoras: 40
            }
        ]
    },
    frontend: {
        nombre: "Especialización en Frontend",
        módulos: [
            {
                nombre: "HTML y CSS Avanzado",
                lecciones: 15,
                duraciónHoras: 45
            },
            {
                nombre: "JavaScript Moderno",
                lecciones: 8,
                duraciónHoras: 30
            },
            {
                nombre: "Framework Vue.js",
                lecciones: 13,
                duraciónHoras: 42
            },
            {
                nombre: "Framework React.js",
                lecciones: 9,
                duraciónHoras: 35
            },
            {
                nombre: "Framework Angular",
                lecciones: 9,
                duraciónHoras: 36
            }
        ]
    },
    backend: {
        nombre: "Especialización en Backend",
        módulos: [
            {
                nombre: "Arquitectura Backend y Bases de Datos",
                lecciones: 18,
                duraciónHoras: 65
            },
            {
                nombre: "Node.js para Backend",
                lecciones: 21,
                duraciónHoras: 75
            },
            {
                nombre: "Python: Desde Básico hasta Avanzado",
                lecciones: 7,
                duraciónHoras: 28
            },
            {
                nombre: "PHP para Backend",
                lecciones: 21,
                duraciónHoras: 65
            },
            {
                nombre: "C# y .NET para Backend",
                lecciones: 11,
                duraciónHoras: 31
            },
            {
                nombre: "Java para Backend",
                lecciones: 11,
                duraciónHoras: 35
            }
        ]
    },
    fullstack: {
        nombre: "Especialización en Fullstack",
        módulos: [
            {
                nombre: "Full Stack con JavaScript",
                lecciones: 20,
                duraciónHoras: 80
            },
            {
                nombre: "Full Stack con Next.js",
                lecciones: 4,
                duraciónHoras: 15
            },
            {
                nombre: "Full Stack con WordPress",
                lecciones: 7,
                duraciónHoras: 30
            }
        ]
    }
};

// Destructuración de Objetos

const { introduccionWeb: introWeb, frontend: frontEnd, backend, fullstack } = programaDesarrollo;
console.log(introWeb, "\n------", frontEnd, "\n------", backend, "\n------", fullstack);
console.log("\n\n");

// Definición de otro objeto
let planDuo = {
    costo: 299,
    periodicidad: "Anual",
    numeroEstudiantes: 2
};

// Destructuración con operador Rest
const { costo, ...otrosDetalles } = planDuo;
console.log(costo, "\n", otrosDetalles);

// Congelación de Objetos
console.log("### Congelación de Objetos ###");
let planBasico = {
    costo: 29,
    periodicidad: "Mensual",
    numeroEstudiantes: 1
};

// Congelar el objeto para evitar modificaciones
Object.freeze(planBasico);
planBasico.costo = 30;
planBasico.costo === 30 ? console.log("Modificación exitosa\n") : console.log("No se pudo modificar\n");

// Sellar el objeto para permitir solo modificaciones de propiedades existentes
planDuo = {
    costo: 299,
    periodicidad: "Anual",
    numeroEstudiantes: 2
};
Object.seal(planDuo);
console.log(Object.isSealed(planDuo));
planDuo.costo = 30; // Modificación permitida
planDuo.costo === 30 ? console.log("Modificación exitosa") : console.log("No se pudo modificar");
console.log("Costo:", planDuo.costo, "\n");

// Copia de objetos usando spread
let planExpert = {
    costo: 239,
    periodicidad: "Anual",
    numeroEstudiantes: 1,
    detalles: {
        prueba: "valorOriginal"
    }
};

let copiaPlanExpert = { ...planExpert };
console.log("Copia:", copiaPlanExpert, "\n");

// Modificación de la copia
copiaPlanExpert.detalles.prueba = "Valor Modificado";
copiaPlanExpert.costo = 20;

console.log("Original:", planExpert);
console.log("Copia:", copiaPlanExpert);

console.log("###############################################################################");

// Unión de objetos
planExpert = {
    costo: 239,
    periodicidad: "Anual",
    numeroEstudiantes: 1,
    detalles: {
        prueba: "valorOriginal"
    }
};
let tipoDePlan = {
    categoria: [
        {
            subCategoria: "Individual"
        },
        {
            subCategoria: "Corporativo"
        }
    ]
};

let combinado = { ...tipoDePlan, ...planExpert };
console.log(combinado, "\n\n");

// Uso de 'this' en objetos
let persona = {
    id: 1,
    nombre: "Ana",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar();
console.log("Valor de 'this' global:", this);

let personaArrow = {
    id: 2,
    nombre: "Luis",
    saludar: () => {
        console.log(`\nHola, soy ${this.nombre}\n\n`);
    }
};
personaArrow.saludar();

// Métodos para trabajar con objetos
planDuo = {
    costo: 299,
    periodicidad: "Anual",
    numeroEstudiantes: 2
};

console.log("Claves:", Object.keys(planDuo));
console.log("Valores:", Object.values(planDuo));
console.log("Claves y Valores:", Object.entries(planDuo));
