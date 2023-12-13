import React from "react";
import "./App.css";
import { N800 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';
import TaskIcon from '@atlaskit/icon/glyph/task'
import EditorAddIcon from '@atlaskit/icon/glyph/editor/add'
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right'
import FolderIcon from '@atlaskit/icon/glyph/folder'
//import TaskIcon from '../icons/task.png'; // Cambié el nombre del import para mayor claridad

const ImgIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img alt={alt} src={src} height={24} width={24} style={{ borderRadius: 3 }} />
);



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <p> Edit <code>src/App.tsx</code> and save to reload. </p>
    //   </header>
    // </div>


    <div
      style={{
        color: token('color.text', N800),
        backgroundColor: token('elevation.surface.overlay', '#fff'),
/*         boxShadow: token(
          'elevation.shadow.overlay',
          '0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)',
        ), */
        borderRadius: 4,
        maxWidth: 320,
        margin: `${token('space.200', '16px')} auto`,
      }}
    >
      <MenuGroup>

        <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
          <h2>Proyectos</h2>
        </div>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <div>
              <span style={{ paddingLeft: '10px' }}> Proyecto 1</span>
            </div>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 2</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 3</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 4</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 5</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 6</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 7</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 8</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 9</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 10</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 11</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 12</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 13</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 14</span>
          </div>
        </ButtonItem>

        <ButtonItem>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
            <FolderIcon label="" />
            <span style={{ paddingLeft: '10px' }}> Proyecto 15</span>
          </div>
        </ButtonItem>








        <Section hasSeparator>
          <ButtonItem>Crear nuevo proyecto</ButtonItem>
        </Section>
      </MenuGroup>
    </div>



  );
}

export default App;