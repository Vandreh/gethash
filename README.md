# Cadastro de Fotos

**CP**

- Deve ser possível cadastrar um usuario.
**CP**

- Não deve ser possível cadastrar um usuario com nome já existente.
- O usuário responsável pelo Create, Update e Delete deve ser um usuário administrador.

# Listagem de Fotos


**O usuário não precisar estar logado no sistema:**

- Deve ser possível listar todas as fotos
- Deve ser possível listar todas as fotos disponíveis pelo - titulo da foto


**O usuário precisar estar logado no sistema:**

- Deve ser possível cadastrar fotos com titulo e descrição
- Deve ser possível atualizar a descripção de fotos
- Deve ser possível deletar fotos


**URL's**

***Sign Up***
- POST: https://gethash.herokuapp.com/users
body(JSON):
{
	"name": "nome do usuario",
	"password": "password"
}

***Sign In***
- POST: https://gethash.herokuapp.com/sessions
body(JSON): 
{
	"name": "nome do usuario",
	"password": "password"
}

***Listar todas as fotos***
- GET: https://gethash.herokuapp.com/photos

***Buscar uma foto***
- GET: https://gethash.herokuapp.com/photos/:Titulo

***Guardar uma foto***
- POST: https://gethash.herokuapp.com/photos/:user_id
	Multipart Form
  { "images": "File",
  "title": "Titulo da foto",
  "description": "descrição da foto" }
  
***Atualizar uma foto***
- PUT: https://gethash.herokuapp.com/photos/:id
body(JSON):
{
	"description": "nova descrição"
}

***Deletar uma foto***
- DELETE: https://gethash.herokuapp.com/photos/:id
