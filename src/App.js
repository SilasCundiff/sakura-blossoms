import React, { useState } from 'react';
import NavBar from './components/Navs/NavBar';
import { ThemeProvider } from 'styled-components';
import { styleBuilder } from './helpers/styleBuilder';
import { themeBuilder } from './helpers/themeBuilder';
import GlobalStyle from './GlobalStyles';
function App() {
  const [selectedStyles, setSelectedStyles] = useState({
    primaryHue: 'pink',
    primaryLightness: 500,
    secondaryHue: 'pink',
    secondaryLightness: 50,
    primaryFont: 'Poppins',
    primaryFontWeight: 'regular',
    secondaryFont: 'Exo',
    secondaryFontWeight: 'thin',
  });

  const styles = styleBuilder(selectedStyles);
  const theme = themeBuilder({ ...styles });
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <div className='ParagraphTest'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus
          modi sint mollitia expedita sit, velit officia reiciendis veritatis
          beatae commodi, inventore id labore eveniet hic sequi! Ipsa illo
          libero dolorum eius beatae, quisquam, neque expedita soluta aperiam
          itaque mollitia. Quaerat vitae accusantium iusto harum eos error,
          animi fugit et vel blanditiis laborum, ea, perspiciatis dolorem totam
          odio excepturi! Consequuntur, eveniet cupiditate perferendis quis
          dolore consectetur? Natus quidem laborum alias recusandae iusto
          impedit quod excepturi illum pariatur totam reprehenderit architecto
          ab ea rerum sit quo itaque corporis sint at enim porro odit, nam
          suscipit odio. Doloremque, dolorum cum! Maiores facilis, velit
          exercitationem rerum ab reprehenderit molestiae incidunt
          necessitatibus laborum quasi neque asperiores molestias aliquam eos.
          Et laudantium voluptate libero nesciunt minima itaque possimus
          provident quo molestiae nihil dolorum, totam, ullam amet ducimus
          dolores ipsam quae ex ipsa, corrupti magni est? Saepe tenetur rem
          facere! Culpa deleniti omnis cupiditate obcaecati odit magnam quasi
          non, minima nam! Eligendi enim autem pariatur voluptas ipsam rem aut
          saepe modi sed porro. Minima eos sequi consectetur fuga aliquam,
          distinctio obcaecati nostrum at voluptatibus quidem illo praesentium
          assumenda ad temporibus ipsum commodi laboriosam impedit aliquid
          adipisci accusamus ratione animi eveniet repellendus. Molestias at
          quidem amet, nobis dicta doloremque sapiente, quae unde veritatis
          dolores dignissimos pariatur est modi dolore culpa error commodi
          deserunt ipsam in nemo. Sequi in dolore omnis reprehenderit, ab facere
          hic magnam placeat ipsam et laudantium maiores deleniti, rerum ducimus
          ea, ut rem. Amet perferendis dolorem commodi exercitationem sit modi
          aliquam earum. Praesentium voluptatem temporibus alias tempora,
          commodi vero nisi sapiente eos neque fugit iste assumenda architecto
          mollitia possimus eveniet ea voluptatum sequi eaque placeat ad totam
          nemo voluptates exercitationem accusamus. Magni maiores doloremque
          sint provident eveniet. Necessitatibus, neque quos! Ipsa quam nesciunt
          eos soluta commodi suscipit temporibus, illo possimus adipisci? Optio
          molestias quas eius fuga ad numquam quod asperiores tempora neque
          architecto! Delectus voluptatem iste distinctio harum nemo, sed
          deleniti voluptas adipisci, aliquid explicabo ipsa quo excepturi
          officiis nesciunt quam enim maxime sequi ab ullam veniam magni earum.
          Animi voluptatem soluta deleniti perferendis quia, fugit amet nam modi
          doloremque quaerat error adipisci. Eaque dolores modi hic voluptatum
          ullam ea nihil non distinctio officia excepturi cum veniam magni
          dolorum ipsa fugit cupiditate quisquam, voluptate minima quaerat amet.
          Quaerat culpa aliquam itaque nulla ipsam corrupti saepe iste numquam
          ullam obcaecati odio neque inventore, commodi cupiditate praesentium
          atque cum! Consequuntur asperiores totam magni dolorum placeat
          molestiae fuga? Eaque nam consectetur voluptatem culpa nulla suscipit
          sint esse tempore maiores, minus eum placeat. Ratione mollitia
          recusandae ex placeat distinctio. Adipisci, accusantium expedita
          reiciendis esse iste officia molestiae explicabo odio ab consequuntur
          veritatis odit ut non, vitae dolorem, libero earum veniam! Est modi ab
          iusto dolor expedita aliquid explicabo illo atque eaque repudiandae
          fugiat non quis, dolorum aperiam sit soluta consectetur, qui dolorem
          possimus rerum. Assumenda vitae earum nostrum tenetur dolores
          suscipit, temporibus aliquid sint eaque cum quia amet! Quae
          exercitationem molestiae, animi quas vel aut harum id quaerat dicta
          quasi ullam quidem obcaecati voluptatibus, voluptates, ab delectus
          doloremque vero? Dicta sequi vitae atque deserunt voluptas alias
          architecto delectus consequatur mollitia molestias. Nisi consectetur
          totam excepturi dignissimos eligendi molestiae, at obcaecati, illo,
          nihil alias dolore ex neque culpa! Omnis labore totam quibusdam
          accusantium rerum ab possimus atque quas consectetur, suscipit cum
          autem natus consequatur adipisci magnam? Neque soluta adipisci alias
          eum praesentium nihil tempora facere impedit? Enim maiores nam
          praesentium minus! Eos deserunt ratione molestias ullam nobis magnam
          repudiandae, quibusdam eveniet neque, fugiat, soluta a! Rerum nam
          voluptas est exercitationem itaque. Enim quo nesciunt voluptas sunt,
          fugiat earum reiciendis harum ad quaerat accusamus et inventore
          debitis id consequatur! Quas sed facilis qui neque sit laudantium
          soluta praesentium. Quidem velit quos distinctio nemo, recusandae
          eveniet sunt modi reiciendis expedita tempora? Libero quia at corrupti
          eum, maiores suscipit adipisci fuga ratione, fugit deleniti magni,
          assumenda amet exercitationem pariatur. Ducimus, ex repudiandae
          placeat molestias soluta illo, nisi inventore nostrum necessitatibus
          assumenda corrupti molestiae velit explicabo adipisci dicta sunt.
          Alias quisquam nisi ea rerum cum. Excepturi, tempora, porro, inventore
          cumque ea dolore sapiente magni impedit quisquam temporibus recusandae
          in. Odio quo voluptatem ipsam aperiam illum molestiae porro quia
          placeat ipsum et, minus architecto vitae quam aliquam. Consequatur
          quae iure voluptatibus officiis suscipit rem minima debitis iusto
          possimus modi, doloribus atque. Amet incidunt dolorem architecto id
          hic, odio, illo esse unde nesciunt dignissimos fuga. Quisquam quaerat
          accusamus vero atque corporis odio adipisci eius officiis labore illum
          nostrum nemo, ullam voluptatum minima expedita eveniet sint laboriosam
          quas, nulla amet magnam est quidem repellat tempora! Quas vero,
          aliquid nisi dolorum repellat qui corrupti sunt quasi hic eius
          delectus pariatur necessitatibus porro sequi. Necessitatibus corporis
          exercitationem doloremque facilis vitae officia quidem? Minus
          provident architecto amet voluptates in deserunt illo, earum dolorum
          accusantium nam? Dolores, iure architecto officiis soluta dignissimos,
          laborum sit laboriosam eveniet deserunt saepe veritatis cumque minima
          perferendis deleniti illo, similique aut earum. Accusantium aut
          doloremque recusandae ab tempora sapiente eaque at quae fugit veniam
          mollitia aliquid animi fuga quasi amet, quam dolor! Molestiae
          accusantium, in sint, esse, ab enim vel consequatur aliquam odio ut
          iusto sed voluptatum porro nam? Nemo laudantium explicabo cumque, ex,
          repellendus tempore et atque obcaecati recusandae cum ut voluptas
          magnam? Quos, nulla assumenda debitis ullam unde ipsum veniam quia in
          beatae cum itaque dolore libero id alias similique quae quo aperiam
          eos? Saepe, enim possimus similique quo magnam aspernatur
          reprehenderit nulla voluptates nemo delectus necessitatibus maiores
          inventore doloribus a debitis unde fugiat ducimus aliquid dolorem
          eligendi tenetur facilis iusto porro placeat! Expedita fugit modi hic
          maiores ex alias tempora repudiandae, cum ratione exercitationem iure
          esse suscipit beatae pariatur velit necessitatibus est perspiciatis
          minima adipisci a dicta quasi numquam molestias asperiores. Impedit
          labore deleniti tempora quasi et odit delectus vero? Provident iusto
          eaque repellat voluptatem iste aperiam, non quod? Voluptatum, odio
          blanditiis ullam ipsam, eligendi quas, dolor eum facilis qui error
          cupiditate sint quidem illo fugit quia accusamus distinctio culpa!
          Ducimus consectetur impedit delectus fugit sunt necessitatibus. Quam
          quod rerum, accusamus quibusdam eligendi qui nobis quos itaque vero
          quidem corrupti adipisci consectetur, officiis tenetur alias
          repudiandae, recusandae accusantium fuga fugiat et velit. Earum
          officia a iusto provident reprehenderit voluptatibus officiis in, et
          facilis hic facere corrupti ullam soluta aliquam repellat atque,
          aliquid harum? Blanditiis sequi fugit praesentium sint, aspernatur
          soluta facilis sapiente iste cum quidem delectus fuga quo corrupti
          laborum possimus nam reprehenderit inventore laboriosam, rem veniam a
          iusto! Consectetur, harum. Officiis nulla in saepe esse quaerat quos
          rem delectus nesciunt iure? Esse perspiciatis ipsam consectetur magnam
          fuga, eaque reprehenderit, ipsum iusto error, culpa labore optio
          dolore praesentium pariatur nulla impedit maxime corrupti debitis?
          Alias, ipsa odio eius distinctio quas quo reprehenderit quam?
          Voluptate consectetur similique unde ducimus possimus, eaque iure
          vitae quasi sint ipsa quaerat. Deserunt doloribus numquam mollitia
          facere eveniet provident recusandae suscipit beatae optio? Praesentium
          nobis explicabo, fugiat aperiam, harum sunt deserunt ab provident
          reiciendis voluptatum illum recusandae unde ipsam soluta qui dicta sit
          quis, magnam consequuntur rerum repellat? Consequuntur sequi
          temporibus mollitia at velit blanditiis iure quo enim facere, id quia?
          Aliquam suscipit veniam asperiores in alias similique officia quaerat
          voluptatem distinctio doloremque deserunt ut molestias error omnis
          fugit tempora possimus itaque, repudiandae ipsum delectus dolores ipsa
          autem. Beatae accusantium itaque ducimus error! Obcaecati, cumque
          totam! Accusamus ut in numquam autem? Neque dignissimos cum
          exercitationem harum architecto consequatur error repellat commodi
          fugit, earum nostrum quos quis voluptates itaque ullam alias non
          pariatur incidunt laborum nisi corrupti est in nesciunt porro. Fuga
          totam odit consectetur amet quam culpa suscipit quae dolor, a ipsa
          commodi vitae ad est porro laboriosam eaque officia quas explicabo.
          Aliquid consequatur dignissimos earum explicabo dolor recusandae totam
          labore eos cupiditate deserunt at iste, laudantium modi id fuga quia
          fugiat officia illum animi quas distinctio nulla laboriosam
          necessitatibus! Placeat illo aliquid ex reiciendis delectus voluptates
          deleniti voluptatibus totam est incidunt minima quasi debitis libero,
          vero molestias dolores ducimus consectetur nobis. Illo consequatur
          aperiam sequi optio, quia ratione neque suscipit aut eaque explicabo
          nobis ex ullam amet aliquid eveniet. Error animi distinctio vero
          sapiente vel est sequi dolore veritatis voluptatum unde ratione
          perspiciatis consectetur fugiat iure aliquid nesciunt similique,
          adipisci reprehenderit perferendis ipsam sit praesentium et? Suscipit,
          libero? Iste asperiores dignissimos non doloribus ex eum sed ab
          consectetur, obcaecati possimus error omnis rerum, aperiam delectus
          illo, adipisci sunt aut. Aspernatur aliquam beatae consequatur
          voluptatum quam alias laboriosam tempore dolorem exercitationem,
          quibusdam delectus eum illum praesentium aliquid soluta temporibus
          obcaecati molestias repellendus quia aut vel et deserunt possimus.
          Veritatis animi amet quia debitis nemo optio officiis omnis fuga! Eum
          cupiditate nostrum molestiae. Rerum ut veritatis, necessitatibus a
          voluptas exercitationem odio pariatur. Incidunt eveniet at fugit aut,
          esse nisi labore blanditiis beatae voluptatum atque mollitia et
          explicabo minima autem vero eum repudiandae voluptates odit
          reiciendis. Quibusdam velit eius reprehenderit exercitationem
          recusandae reiciendis libero blanditiis quisquam deserunt, repudiandae
          dignissimos, ea omnis dolorum officiis illo dicta impedit doloribus
          quam consectetur. Inventore doloribus sint sed ea quidem laudantium
          consequatur, suscipit magnam, magni rerum est molestias esse tempora
          perspiciatis pariatur, sit vel veritatis nihil vero eveniet laborum
          officiis. Corporis sunt ullam soluta sed corrupti exercitationem, quia
          odit dolores ducimus, velit explicabo sint rem. Hic, numquam modi eius
          non, officiis eveniet explicabo ea autem est adipisci minima provident
          perspiciatis rem? Quidem, quibusdam? Qui ratione modi iste. Mollitia,
          nihil labore ipsam commodi molestias voluptas repellat accusamus a ab
          perspiciatis odit dolorem rem eveniet velit, dolores ullam dignissimos
          ratione modi quos porro enim impedit! Fugiat quis fugit, odit suscipit
          dolores unde alias repudiandae dolorem laboriosam reprehenderit! Eius
          quae error animi autem impedit eaque magnam magni veritatis
          consectetur? Quas officiis maxime earum beatae amet! Laboriosam
          deleniti asperiores laborum facere debitis sunt earum ad quasi
          consequatur officiis quam totam ratione quae, ut ipsa tempore dolorem
          sapiente dicta, deserunt consectetur impedit voluptatibus aspernatur
          tenetur? Quibusdam sunt, non illum necessitatibus repellat nostrum
          ducimus blanditiis aut, facere culpa minima autem! Facilis sequi
          corporis assumenda magnam asperiores maxime est aliquam dolorum
          voluptates porro perferendis fuga quasi excepturi minima fugit minus
          qui numquam tenetur labore officiis, aut amet ea odit? Maiores
          consectetur vitae, eligendi ex sed maxime earum optio est modi, quos
          repellat tenetur perferendis aliquam at similique voluptatum, voluptas
          mollitia laborum dignissimos iste ducimus! Perferendis delectus veniam
          laudantium impedit itaque laborum dicta labore, recusandae quas
          similique sunt, tenetur voluptates harum commodi pariatur adipisci
          earum obcaecati nesciunt incidunt est tempora! Ex non, reprehenderit,
          aspernatur odit debitis praesentium quibusdam amet, omnis esse
          consequuntur numquam! Deleniti hic porro eius nesciunt reprehenderit
          veniam harum magni quo, obcaecati tempora illum pariatur laboriosam
          distinctio sit minima corrupti officiis soluta asperiores numquam
          tempore. Neque, perferendis commodi est beatae totam quas impedit
          repellat iusto quis voluptatem quos minus consectetur placeat sequi
          incidunt distinctio. Quibusdam, quas vel saepe expedita placeat at,
          ipsa sed architecto in eveniet recusandae. Veritatis ducimus saepe
          reprehenderit cupiditate sequi cumque quaerat ratione totam,
          necessitatibus minima vel excepturi obcaecati debitis voluptate
          nesciunt! Nemo similique nobis laboriosam culpa fugiat consequatur
          tempore facere eaque soluta exercitationem, minus et a incidunt porro
          quis impedit inventore libero neque reprehenderit corrupti rem? Odio
          cum cumque, eaque temporibus dolorem provident nihil sint minima
          ducimus officiis amet nemo consequatur reprehenderit perferendis optio
          doloribus. Blanditiis eum dolor eligendi qui quae impedit. Enim
          provident eligendi ipsa quas odio quod commodi, blanditiis tempora
          labore minima doloremque quo delectus velit dignissimos assumenda hic,
          harum quos, reiciendis earum consequatur minus ipsam. Aut, ipsa
          nostrum et excepturi veritatis fugit quos. Id officiis earum possimus
          at fugiat sint totam animi consectetur, quae natus perferendis
          recusandae quos, veritatis tempora unde laborum? Officiis cum aut, id
          alias ipsum ea commodi doloremque doloribus, cumque culpa dignissimos
          voluptas amet similique at nemo sequi sunt pariatur sint. Culpa et
          deserunt hic, modi illum vero illo? In maiores, nisi eligendi ullam
          exercitationem iusto quibusdam error illo repudiandae earum voluptas
          veritatis recusandae et libero consequuntur fugiat. Iste sapiente ad,
          alias nam facere a et praesentium officiis, error atque quae
          repudiandae dignissimos quis at quaerat obcaecati quia accusamus.
          Ducimus mollitia rem vel quo hic. Non, modi reiciendis tenetur eaque
          ab minima fugit ea quam consequatur quia tempora facere aspernatur
          unde, corporis id sit quis at quod eius commodi! Natus, quisquam.
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
