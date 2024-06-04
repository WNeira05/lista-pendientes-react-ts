##  Lista de tareas en React con TypeScript



Se creó una simple lista de tareas utilizando React con TypeScript, Utilizando los componentes funcionales de React, el estado local y las propiedades tipadas, para finalizar con una aplicación que permitirá agregar y borrar tareas de una lista.

### Paso 1: Configuración del proyecto

Antes de comenzar, asegurarse de tener Node.js y npm (o yarn) instalados en el sistema. Luego, crear un nuevo proyecto React con TypeScript ejecutando el siguiente comando en la terminal:

```
npm create vite
```


### Paso 2: Crear los componentes

-   `TodoApp.tsx`: Este será el componente principal de la aplicación.
-   `Tarea.tsx`: Componente para representar una tarea individual.
-   `ListaTareas.tsx`: Componente que mostrará la lista de tareas.

### Paso 3: Implementar la funcionalidad

#### `Tarea.tsx`


```
import React from "react";

type TareaProps = {
  tarea: string;
  borrarTarea: () => void;
};

const Tarea: React.FC<TareaProps> = ({ tarea, borrarTarea }) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={borrarTarea}>Borrar</button>
    </div>
  );
};

export default Tarea;
```

#### `ListaTareas.tsx`

```
import React from "react";
import Tarea from "./Tarea";

type ListaTareasProps = {
  listaTareas: string[];
  borrarTarea: (index: number) => void;
};

const ListaTareas: React.FC<ListaTareasProps> = ({ listaTareas, borrarTarea }) => {
  return (
    <div className="taskList">
      {listaTareas.map((tarea, index) => (
        <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
      ))}
    </div>
  );
};

export default ListaTareas;
```

#### `TodoApp.tsx`


```
import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const TodoApp: React.FC = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  );
};

export default TodoApp;
```

### Paso 4: Estilizar la aplicación
Agregar los estilos correspondientes


### Paso 5: Ejecutar la aplicación

Ejecutar el siguiente comando en la termina para ver la aplicación:

```
npm start
```

Esto abrirá la aplicación en el navegador. Ahora deberías poder agregar y borrar tareas en tu lista de tareas.
