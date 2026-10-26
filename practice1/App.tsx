import React, { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


//1 задача

type GreetingProps = {
  name?: string
  greeting?: string
}

function Greeting({ name, greeting = 'привет'}: GreetingProps) {
  const displayName = name || 'Гость'
  return (
    <p>
       {greeting}, {displayName}!
    </p>
  )
}

//2 задача
type ProductProps = {
  title: string
  price: number
  discount?: number
}

function Product({ title, price, discount = 0}: ProductProps ) {
  const finalPrice = price - (price * discount) / 100
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8}}>
      <h3>{title}</h3>
      <p>Цена: {finalPrice.toFixed(2)}</p>
      {discount > 0 && (
        <>
          <p>
            <s>{price.toFixed(2)}</s>
          </p>
          <p>Скидка: {discount}</p>
        </>
      )}
    </div>
  )
}

//3 задача
type AvatarProps = {
  name: string
  size: number
}

function Avatar({name, size = 48} : AvatarProps) {
  return (
    <div
      style ={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: size / 2.5,
        fontWeight: 'bold',
      }}
    >
      {name[0].toUpperCase()}
    </div>
  )
}

//4 задача

type CardProps = {
  title: string
  children: []
}

function Card({title, children} : CardProps) {
  return (
    <div
      style = {{
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      }}

    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

//Задача 5

type Variant = 'primary' | 'secondary' | 'danger'

const colors : Record<Variant, string> = {
  primary: '#3b82f6',
  secondary: '#6b7290',
  danger: '#ef4444',
}

type ButtonProps = {
  children: React.ReactNode
  variant?: Variant
  onClick?: () => void
  disabled?: boolean
}

function Button({children, variant = 'primary', onClick, disabled = false}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colors[variant],
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        padding: '8px 16px',
        margin: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 :1,
      }}
    >
      {children}
    </button>
  )
}

function App() {
  return (
      <div style={{padding: 24, fontFamily: 'sans-serif'}}>
        <h2>задача 1: Greeting</h2>
          <Greeting name = "Иван"/>
          <Greeting name = "Мария" greeting="Привет"/>
          <Greeting />
         <h2>Задача 2: Product</h2>
      <Product title="Ноутбук" price={80000} discount={15} />
      <Product title="Мышь" price={2500} />

      <h2>Задача 3: Avatar</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Avatar name="Иван" size={32} />
        <Avatar name="Мария" size={48} />
        <Avatar name="Пётр" size={80} />
      </div>

      <h2>Задача 4: Card</h2>
      <Card title="О нас">
        <p>Мы делаем крутые приложения на React.</p>
      </Card>

    </div>
  )
}

export default App
