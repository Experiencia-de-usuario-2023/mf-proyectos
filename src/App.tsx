import React from "react";
import "./App.css";
import { N800 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import { ButtonItem, MenuGroup } from '@atlaskit/menu';
import TaskIcon from '@atlaskit/icon/glyph/task'
import EditorAddIcon from '@atlaskit/icon/glyph/editor/add'
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right'
import FolderIcon from '@atlaskit/icon/glyph/folder'
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



const ImgIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img alt={alt} src={src} height={24} width={24} style={{ borderRadius: 3 }} />
);

function App() {
  /* const projects = Array.from({ length: 30 }, (_, i) => `Proyecto ${i + 1}`); */
  const projects: string[] = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', "Proyecto 4", "Proyecto "];


  function generateNestingItems(projects: string | any[]) {

    const nestingItems = [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      <h1></h1>
      nestingItems.push(
        <NestingItem
          key={i}
          id={i.toString()}
          isSelected
          title={project}
          iconBefore={<QueueIcon label="" />}
        >
          <Section title={`Reuniones del ${project}`} isList>
            <ButtonItem>Reunión 1</ButtonItem>
            <ButtonItem>Reunión 2</ButtonItem>
            <ButtonItem>Reunión 3</ButtonItem>
            <ButtonItem>Reunión 4</ButtonItem>
            <ButtonItem>Reunión 5</ButtonItem>
          </Section>
          <Section hasSeparator>
            <ButtonItem>Nueva reunión</ButtonItem>
          </Section>
        </NestingItem>
      );
    }

    return nestingItems;

  }


  return (

    <div style={{ display: "flex" }} >
      {/*       <div
        style={{
          color: token('color.text', N800),
          backgroundColor: token('elevation.surface.overlay', '#fff'),
          borderRadius: 4,
          maxWidth: 320,
          margin: `${token('space.200', '16px')} auto`,
        }}>
        <MenuGroup>
          <div className="project-title">
            <h2>Proyectos</h2>
          </div>
          {projects.map((project, index) => (
            <ButtonItem key={index}>
              <div className="project-item">
                <FolderIcon label="" />
                <span className="project-name">{project}</span>
              </div>
            </ButtonItem>
          ))}

          <Section hasSeparator>
            <ButtonItem>Crear nuevo proyecto</ButtonItem>
          </Section>
        </MenuGroup>
      </div> */}



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
            testId="nestable-navigation-content"
          >

{/*             <Section>

               <div className="project-title">
                <h2>Proyectos 222</h2>
              </div> 
            </Section> */}

            <Section isList testId='seccions'>



              {generateNestingItems(projects)}
              {/*               {projects.map((project, index) => (
                <NestingItem 
                  key={index}
                  id="1"
                  isSelected
                  title={project}
                  // title="Queues view ${index}" 
                  iconBefore={<QueueIcon label="" />}
                >
                  <Section title={`Queues ${project}`} isList>
                    <ButtonItem>Untriaged {project}</ButtonItem>
                    <ButtonItem>My feature work</ButtonItem>
                    <ButtonItem>My bugfix work</ButtonItem>
                    <ButtonItem>Signals</ButtonItem>
                    <ButtonItem>Assigned to me</ButtonItem>
                  </Section>
                  <Section hasSeparator>
                    <ButtonItem>New queue</ButtonItem>
                  </Section>
                </NestingItem>
              ))} */
              
                <Section hasSeparator>
                  <ButtonItem>Crear nuevo proyecto</ButtonItem>
                </Section>}

            </Section>


          </NestableNavigationContent>
        </SideNavigation>
      </div>

    </div>
  );
}



export default App;