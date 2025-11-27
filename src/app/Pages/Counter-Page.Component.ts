
import { Component } from "@angular/core";

@Component({
    template: `
      <div style="padding: 20px; font-family: Arial, sans-serif;">

  <!-- Búsqueda y botones arriba -->
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <input type="text" placeholder="Buscar cursos"
      style="width: 60%; padding: 10px; border-radius: 8px; border: 1px solid #ccc;">
    
    <div>
      <button style="margin-right: 10px; padding: 10px 20px; border-radius: 8px;">Registrarse</button>
      <button style="padding: 10px 20px; border-radius: 8px;">Iniciar sesión</button>
    </div>
  </div>

  <!-- Banner principal -->
  <div style="
    margin-top: 30px;
    background: #ddd;
    padding: 60px;
    font-size: 40px;
    font-weight: bold;
    border-radius: 15px;
    text-align: center;">
    Minijuegos de programación<br>
    Desde 0
  </div>

  <!-- Sección derecha (Aprende / Enseña) -->
  <div style="display: flex; margin-top: 30px; gap: 20px;">
    
    <!-- Aprende -->
    <div style="flex:1; background: #c7afff; padding: 30px; border-radius: 15px;">
      <h2>Aprende</h2>
      <p>✔ Rápido</p>
      <p>✔ Intuitivo</p>
      <p>✔ Divertido</p>
      <p>✔ Progresivo</p>
    </div>

    <!-- Enseña -->
    <div style="flex:1; background: #5d3da6; padding: 30px; border-radius: 15px; color:white;">
      <h2>Enseña</h2>
      <p>Crea tus cursos</p>
      <p>Estructura tus temas</p>
      <p>Con herramientas sencillas</p>
    </div>

  </div>

  <!-- Tarjetas de cursos -->
  <div style="display: flex; gap: 20px; margin-top: 30px;">

    <div style="
      flex:1; border: 1px solid #ccc; border-radius: 12px; padding: 20px;">
      <h3>Java</h3>
      <p>Curso de Java para principiantes</p>
      <small>Por [Autor]</small>
    </div>

    <div style="
      flex:1; border: 1px solid #ccc; border-radius: 12px; padding: 20px;">
      <h3>POO</h3>
      <p>Curso de programación orientada a objetos</p>
      <small>Por [Autor]</small>
    </div>

  </div>

  <!-- Botones de abajo -->
  <div style="display: flex; gap: 20px; margin-top: 30px;">
    <button style="flex:1; padding: 40px; border-radius: 12px;">Crear cursos</button>
    <button style="flex:1; padding: 40px; border-radius: 12px;">Mis cursos</button>
  </div>

</div>
    `
})
export class CounterPageComponent {}
