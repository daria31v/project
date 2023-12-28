'use client'
import React, { FormEvent, ReactNode } from 'react';

// import { useRef } from 'react'
type FormProps = {
    onSubmit: (formData: FormData) => void;
    children: ReactNode;
    className?: string;
  };

const FormComponent: React.FC<FormProps> = ({ onSubmit, children, className })=> {
//   const formRef = useRef<HTMLFormElement>(null)

//   async function handleAction(formData: any) {
//     await action(formData)
//     if (formRef.current) {
//       formRef.current.reset()
//     }
//   }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };
  const formClasses = `custom-form ${className ? className : ''}`;

  return (
    <form onSubmit={handleSubmit} className={formClasses}>{children}</form>)
}

export default FormComponent
