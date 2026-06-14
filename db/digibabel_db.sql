CREATE DATABASE digibabel_db;

USE digibabel_db;

CREATE TABLE usuario (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    perfil ENUM('bibliotecario', 'leitor') 
);

CREATE TABLE livro (
	id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(250) NOT NULL,
    autor VARCHAR(150) NOT NULL,
    ano_publicacao INT,
    quantidade_disponivel INT NOT NULL
);

CREATE TABLE emprestimo (
	id INT AUTO_INCREMENT PRIMARY KEY,
    livro_id INT,
    leitor_id INT,
    data_emprestimo DATE,
    data_devolucao_prevista DATE,
    data_devolucao_real DATE,
    status ENUM ('ativo', 'devolvido', 'atrasado')
);
