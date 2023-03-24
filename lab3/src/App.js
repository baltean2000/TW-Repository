import React, { useState } from 'react';
import { Menu, Layout, Card, Form, Input, Button, Typography } from 'antd';

const { Header, Content, Sider } = Layout;

const menuItems = [
{ key: '1', label: 'Pagina principală' },
{ key: '2', label: 'Pagina 2' },
{ key: '3', label: 'Pagina 3' },
];

const App = () => {
const [cards, setCards] = useState([]);

const onFinish = (values) => {
console.log(values);
alert('Formularul a fost trimis cu succes!');
const newCards = [
  { title: values.input1, content: `Adresa de email: ${values.input2}, Număr de contact: ${values.input3}` },
  ...cards,
];
setCards(newCards);
};

return (
<Layout>
<Sider collapsedWidth={0} style={{ background: '#001529' }}>
<Menu theme="dark" mode="inline" style={{ height: '80%', borderRight: 5, marginTop: 100 }}>
{menuItems.map((item) => (
<Menu.Item key={item.key}>{item.label}</Menu.Item>
))}
</Menu>
</Sider>
<Layout style={{ marginLeft: 0 }}>
<Header style={{ background: '#001529', padding: 0 }}>
<h1 style={{ color: '#fff', textAlign: 'center',marginTop: '0', fontSize: '30px' }}>Laboratorul 3</h1>
</Header>
<Content style={{ padding: '10%', height: '100%' }}>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
{cards.map((card, index) => (
<Card key={index} title={card.title} style={{ width: '30%', height: "250px" }}>
{card.content}
</Card>
))}
</div>
<Form onFinish={onFinish} style={{ marginTop: '50px' }}>
<Form.Item name="input1" label="Nume/Prenume">
<Input />
</Form.Item>
<Form.Item name="input2" label="Adresa de Email">
<Input />
</Form.Item>
<Form.Item name="input3" label="Număr de contact">
<Input />
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="Submit">
Trimite!
</Button>
</Form.Item>
</Form>
</Content>
</Layout>
</Layout>
);
};