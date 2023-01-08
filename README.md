# Spring-React

Projeto criado usando Spring Boot e React.

**React**

Usando React e o Bootstrap foi criado uma simples tela de cadastro de produto, requisitando apenas o nome e a marca do produto.

![image](https://user-images.githubusercontent.com/106355267/211173326-1042f1b5-3231-483a-9af6-5fa022c77b66.png)

Através de requisições foram buscado as informações de uma API criado em Spring Boot que estava rodando na porta 8080.


**Spring Boot**

Para criação do Back-End da aplicação foi utilizado o SGBD MYSQL.

![image](https://user-images.githubusercontent.com/106355267/211173494-a6aecf40-9063-4c21-ae88-f546608336d0.png)

A partir disso foram criados endpoints para que fossem realizados as requisições no qual:  
**/listar - Endpoint que retorna todos os produtos da API**  

**/cadastrar - Endpoint para realizar o POST cadastrando novos produtos**  

**/alterar - Endpoint para realizar o PUT, alterando os dados de um produto**  

**/remover/{codigo} - Endpoint no qual deve ser passado o código do produto a ser removido**  

![image](https://user-images.githubusercontent.com/106355267/211173729-e8dc1a5a-0cee-4e08-9030-9fee9575fd5e.png)
