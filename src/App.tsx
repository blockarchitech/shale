import React, { useState } from 'react';
import {
  Toggle,
  Checkbox,
  Select,
  DateInput,
  Button,
  Item,
  ItemContainer,
  ItemContainerHeader,
  ItemContainerContent,
  ItemContainerFooter,
  ButtonContainer,
  Paragraph,
} from './components/shale';

function App() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [select1, setSelect1] = useState('major');

  return (
    <>
      <ItemContainer>
        <ItemContainerContent>
          <Paragraph>
            Abilities or he perfectly pretended so strangers be exquisite. Oh to
            another chamber pleased imagine do in. Went me rank at last loud shot an
            draw. Excellent so to no sincerity smallness. Removal request delight if
            on he we. Unaffected in we by apartments astonished to decisively
            themselves. Offended ten old consider speaking.
          </Paragraph>
        </ItemContainerContent>
      </ItemContainer>

      <ItemContainer>
        <ItemContainerHeader>Single Item</ItemContainerHeader>
        <ItemContainerContent>
          <Item description="This is a description for the item.">
            Example Item
            <Toggle checked={toggle1} onChange={() => setToggle1(!toggle1)} />
          </Item>
        </ItemContainerContent>
        <ItemContainerFooter>
          Comfort reached gay perhaps chamber his six detract besides add. Moonlight
          newspaper up he it enjoyment agreeable depending. Timed
          <a href="#">voice share</a> led his widen noisy young.
        </ItemContainerFooter>
      </ItemContainer>

      <ItemContainer>
        <ItemContainerHeader>Multiple Items</ItemContainerHeader>
        <ItemContainerContent>
          <Item>
            Example Item
            <Toggle checked={toggle2} onChange={() => setToggle2(!toggle2)} />
          </Item>
          <Item>
            Example Item
            <Toggle />
          </Item>
          <Item>
            Example Item
            <Select value={select1} onChange={(e) => setSelect1(e.target.value)}>
              <option value="both">Both</option>
              <option value="major">Major only</option>
              <option value="minor">Minor only</option>
            </Select>
          </Item>
        </ItemContainerContent>
      </ItemContainer>

      <ItemContainer>
        <ItemContainerHeader>Checkboxes</ItemContainerHeader>
        <ItemContainerContent>
          <Item>
            Example Item
            <Checkbox checked={checkbox1} onChange={() => setCheckbox1(!checkbox1)} />
          </Item>
          <Item>
            Example Item
            <Checkbox checked={checkbox2} onChange={() => setCheckbox2(!checkbox2)} />
          </Item>
        </ItemContainerContent>
      </ItemContainer>

      <ItemContainer>
        <ItemContainerHeader>Date, Time, Colorpickers</ItemContainerHeader>
        <ItemContainerContent>
          <Item>
            Example Item
            <DateInput />
          </Item>
        </ItemContainerContent>
      </ItemContainer>

      <ItemContainer>
        <ButtonContainer>
          <Button value="SEND" />
        </ButtonContainer>
      </ItemContainer>
    </>
  );
}

export default App;
