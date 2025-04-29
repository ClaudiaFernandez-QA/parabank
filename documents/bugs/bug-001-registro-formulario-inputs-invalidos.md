# Bug Report - 001

**Título:**  
Registro de usuario permite ingresar caracteres no válidos en campos de texto.

---

**Prioridad:**  
Media

**Severidad:**  
Mayor

---

**Descripción:**  
El formulario de registro permite ingresar números en campos que deberían aceptar únicamente letras (First Name, Last Name, City, etc.), lo que puede generar problemas de integridad de datos.

---

**Precondiciones:**  
- Acceder a la página de registro de usuario de ParaBank.

---

**Pasos para reproducir:**
1. Ingresar a la sección "Register" desde la Home.
2. Completar los campos "First Name", "Last Name", "City", "State", etc., utilizando únicamente números (por ejemplo: "1234").
3. Completar el resto del formulario de manera válida.
4. Clic en "Register".

---

**Resultado esperado:**  
El sistema debería validar los campos de texto y no permitir ingresar valores numéricos.

---

**Resultado real:**  
El sistema permite el registro exitoso del usuario con datos numéricos en los campos de texto.

---

**Evidencia:**  
Se registró el usuario con First Name `1234` exitosamente, sin ningún mensaje de validación o restricción.

---

**Notas adicionales:**  
Este bug afecta la integridad de los datos del sistema y podría permitir registros inconsistentes o inválidos.
