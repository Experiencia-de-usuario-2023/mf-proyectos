import React, { useEffect, useState } from "react";
import "./App.css";
import { N800 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import { ButtonItem, MenuGroup } from '@atlaskit/menu';
import TaskIcon from '@atlaskit/icon/glyph/task'
import EditorAddIcon from '@atlaskit/icon/glyph/editor/add'
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right'
import FolderIcon from '@atlaskit/icon/glyph/folder'
import Button from '@atlaskit/button';
import { jwtDecode } from "jwt-decode"
import axios from 'axios';
//import TaskIcon from '../icons/task.png'; // Cambié el nombre del import para mayor claridad

import DropboxIcon from '@atlaskit/icon/glyph/dropbox';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import WorkIcon from '@atlaskit/icon/glyph/folder';
import LightbulbIcon from '@atlaskit/icon/glyph/lightbulb';
import CustomerIcon from '@atlaskit/icon/glyph/person';
import QueueIcon from '@atlaskit/icon/glyph/queues';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import LanguageIcon from '@atlaskit/icon/glyph/world';



import {
  LinkItem,
  NavigationFooter,
  NavigationHeader,
  NestableNavigationContent,
  NestingItem,
  SideNavigation,
  GoBackItem,
  Section
} from '@atlaskit/side-navigation';


import Form, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  RequiredAsterisk,
  ValidMessage,
} from '@atlaskit/form';



const ImgIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img alt={alt} src={src} height={24} width={24} style={{ borderRadius: 3 }} />
);

let responseProyectos: any[] = []; // Variable global para almacenar responseProyectos
let responseReuniones: any[] = []; // Variable global para almacenar responseReuniones

function App() {
  /* const projects = Array.from({ length: 30 }, (_, i) => `Proyecto ${i + 1}`); */
  // const projects: string[] = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', "Proyecto 4", "Proyecto "];

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmFsdmFyYWRvLm1AdXNhY2guY2wiLCJpYXQiOjE3MDI4MjY0ODUsImV4cCI6MTcxMzYyNjQ4NSwiYXVkIjoiaHR0cHM6Ly9tZWV0Zmxvdy5jb20ifQ.q1Bv80PbsQDZPR99KiC1HzPODAc8XT_qAUicuiobdN4";

  const [nestingItems, setNestingItems] = useState<JSX.Element[]>([]);
  const [nestingItemsMeeting, setNestingItemsMeeting] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      // Reemplazar por http://172.111.10.181/api/project/get/findByUser -> para obtener los proyectos del usuario y no todos
      const response = await axios.get("http://172.111.10.181/api/project/get/findByUser", {
        // const response = await axios.get("http://172.111.10.181/api/project/get/all", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      console.log("DENTRO DE FETCHDATA");
      responseProyectos = response.data;
      console.log(responseProyectos);
      generateNestingItems(responseProyectos);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMeetings(projectId: string) {
    try {
      const urlReunionesProyecto = "http://172.111.10.181/api/meeting/project/";
      const idProyecto = projectId;
      const urlPeticionReunionesProyecto = urlReunionesProyecto + idProyecto;
      const response = await axios.get(urlPeticionReunionesProyecto);

      // const response = await axios.get("http://172.111.10.181/api/meeting/project/", { params: { projectId } });
      // const response = await axios.get("http://172.111.10.181/api/meeting/project/657f4909098b0f67b96e4c27");
      console.log(response.data);
      responseReuniones = response.data;
      generateNestingItems(responseProyectos); // Update nesting items with new meetings
      // generateNestingItemsMeeting(responseProyectos);
      // Handle the response data here
    } catch (error) {
      console.error(error);
    }
  }

  function generateNestingItems(projects: any[]) {
    const nestingItems: JSX.Element[] = [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      nestingItems.push(
        <NestingItem
          key={i}
          id={i.toString()}
          isSelected
          title={project.name}
          iconBefore={<QueueIcon label="" />}
          onClick={() => fetchMeetings(project._id)} // Fetch meetings when clicked
        >
          <Section title={`Reuniones del ${project.name}`} isList>
            {responseReuniones.map((reunion, j) => (
              <NestingItem key={j} id={j.toString() + '-' + j.toString()} title={reunion.name} onClick={() => console.log(reunion)}>{reunion.name}
                <Section>
                  <div className="meeting-card">
                    <h2>{reunion.name}</h2>
                    <p>Descripción: {reunion.description}</p>
                    <p>Estado: {reunion.state}</p>
                    <p>Proyecto: {project.name}</p>
                    <p>Creada: {reunion.createdAt}</p>
                  </div>
                </Section>
              </NestingItem>

            ))}
          
            <NestingItem id="eliminarProyecto" title="¿Desea eliminar el proyecto?">
              <Section>
                <Button onClick={(e) => deleteProject(project._id)} appearance="danger">Presione para eliminar</Button>
              </Section>
            </NestingItem>
          </Section>


          <Section hasSeparator>
            <ButtonItem>Nueva reunión</ButtonItem>
            {/* </Section> */}
          </Section>

          

          {/* <Section isList testId='seccions'>
            {nestingItemsMeeting} */}

        </NestingItem>




      );
    }
    setNestingItems(nestingItems);
  }


  async function handleSubmit(values: any) {
    console.log(values.shortName);
    console.log(values.name);
    console.log(values.description);

    try {
      const url = "http://172.111.10.181/api/project/create";
      const data = {
        "shortName": values.shortName,
        "name": values.name,
        "description": values.description,
        "projectDateI": "25-12-2023",
        "projectDateT": "25-12-2023",
        "userOwner": [
          "diego.alvarado.m@usach.cl"
        ],
        "userMembers": [
          "diego.alvarado.m@usach.cl"
        ],
        "createdAt": "2023-12-25T19:11:05.106Z",
        "updatedAt": "2023-12-25T19:11:05.106Z"
      };
      //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmFsdmFyYWRvLm1AdXNhY2guY2wiLCJpYXQiOjE3MDI4MjY0ODUsImV4cCI6MTcxMzYyNjQ4NSwiYXVkIjoiaHR0cHM6Ly9tZWV0Zmxvdy5jb20ifQ.q1Bv80PbsQDZPR99KiC1HzPODAc8XT_qAUicuiobdN4"; // Replace with your actual authorization token
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("despues del post");
      console.log(response.data);
      window.alert("Proyecto creado exitosamente");
      
      // Handle the response data here
    } catch (error) {
      console.error(error);
    }
    
  }

async function deleteProject(projectId: string) {
  try {
    const url = `http://172.111.10.181/api/project/${projectId}`;
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWdvLmFsdmFyYWRvLm1AdXNhY2guY2wiLCJpYXQiOjE3MDI4MjY0ODUsImV4cCI6MTcxMzYyNjQ4NSwiYXVkIjoiaHR0cHM6Ly9tZWV0Zmxvdy5jb20ifQ.q1Bv80PbsQDZPR99KiC1HzPODAc8XT_qAUicuiobdN4"; // Reemplaza con tu token de autorización real
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    window.alert("Proyecto eliminado exitosamente");
    window.location.reload();
    // Maneja los datos de respuesta aquí
  } catch (error) {
    console.error(error);
  }
}








  // async function createProject(values: any) {
  //   try {
  //     const url = "http://172.111.10.181/api/project/create";
  //     const data = {
  //       shortName: values.shortName,
  //       name: values.name,
  //       description: values.description
  //     };
  //     const response = await axios.post(url, data);
  //     console.log(response.data);
  //     // Handle the response data here
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  return (
    <div style={{ display: "flex" }} >
      <div style={{
        height: '100vh',
      }}></div>

      <div style={{
        width: '100%',
      }}>
        <SideNavigation label="project" testId="side-navigation" >

          <NavigationHeader>
            <div className="project-title">
              <h2>Proyectos</h2>
            </div>
          </NavigationHeader>

          <NestableNavigationContent
            initialStack={[]}
            testId="nestable-navigation-content">

            <Section isList testId='seccions'>
              {nestingItems}
            </Section>

            <Section hasSeparator>

            <NestingItem id="n-p" title="Crear nuevo proyecto">
                <Section>
                  {/* <ButtonItem>Crear nuevo proyecto</ButtonItem> */}

                  <Form onSubmit={handleSubmit}>
                    {({ formProps }) => (
                      <form {...formProps}>
                        <Field name="shortName" label="Nombre abreviado del proyecto: ">
                          {({ fieldProps }) => <input {...fieldProps} />}
                        </Field>

                        <Field name="name" label="Nombre completo del proyecto: ">
                          {({ fieldProps }) => <input {...fieldProps} />}
                        </Field>

                        <Field name="description" label="Descripción: ">
                          {({ fieldProps }) => <textarea {...fieldProps} onChange={(event) => fieldProps.onChange(event.target.value)} />}
                        </Field>
                        <Button type="submit" appearance="primary" onClick={handleSubmit} >Crear Proyecto</Button>
                      </form>
                    )}
                  </Form>

          



                </Section>
            </NestingItem>





              {/* <ButtonItem>Crear nuevo proyecto</ButtonItem> */}

            </Section>
          </NestableNavigationContent>
        </SideNavigation>
      </div>
    </div>
  )
}

export default App;