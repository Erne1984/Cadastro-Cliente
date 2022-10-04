create database WEBII;
Use WEBII;
drop database WEBII;
 create table usuario
(
	Id int (11) not null auto_increment,
    Nome varchar(50) null default null,
    Senha varchar(50) null default null,
	primary key (Id)
);
 
Insert into usuario (nome, Senha) values ('Icaro', 'fdsggfdagdafewrwr');
Insert into usuario (nome, Senha) values ('Frank', 'thtjgfhthghjjshjd');

update usuario Set nome = 'Frank' where id=1;
update usuario Set nome = 'Icaro' where id=2;

select * from usuario;

delete from usuario where id=1;
