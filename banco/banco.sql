-- MySQL Script generated by MySQL Workbench
-- dom 7 mag 2023, 13:56:09
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `notifica_email` TINYINT NOT NULL DEFAULT 0 COMMENT 'Caso verdadeiro o cliente concorda em receber notificação por e-mail',
  `telefone` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Tabela destinada para armazenamento dos usuários por aparelho';


-- -----------------------------------------------------
-- Table `mydb`.`icone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`icone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fa_icone` VARCHAR(45) NOT NULL,
  `fundo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `icone_UNIQUE` (`fa_icone` ASC) VISIBLE,
  UNIQUE INDEX `fundo_UNIQUE` (`fundo` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`grupo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`grupo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `icone_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_grupo_icone_idx` (`icone_id` ASC) VISIBLE,
  CONSTRAINT `fk_grupo_icone`
    FOREIGN KEY (`icone_id`)
    REFERENCES `mydb`.`icone` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`prioridade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`prioridade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `icone_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `icone_UNIQUE` (`icone_id` ASC) VISIBLE,
  UNIQUE INDEX `titulo_UNIQUE` (`nome` ASC) VISIBLE,
  CONSTRAINT `fk_prioridade_icone`
    FOREIGN KEY (`icone_id`)
    REFERENCES `mydb`.`icone` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tarefas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tarefas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `grupo_id` INT NULL,
  `prioridade_id` INT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descricao` TEXT NULL,
  `inicio` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fim` DATETIME NOT NULL,
  `status_id` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_tarefas_grupo_idx` (`grupo_id` ASC) VISIBLE,
  INDEX `fk_tarefas_prioridade_idx` (`prioridade_id` ASC) VISIBLE,
  INDEX `fk_tarefas_status_idx` (`status_id` ASC) VISIBLE,
  CONSTRAINT `fk_tarefas_grupo`
    FOREIGN KEY (`grupo_id`)
    REFERENCES `mydb`.`grupo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tarefas_prioridade`
    FOREIGN KEY (`prioridade_id`)
    REFERENCES `mydb`.`prioridade` (`nome`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tarefas_status`
    FOREIGN KEY (`status_id`)
    REFERENCES `mydb`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dispositivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`dispositivo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hash` VARCHAR(45) NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_dispositivo_usuario`
    FOREIGN KEY ()
    REFERENCES `mydb`.`usuario` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb` ;

-- -----------------------------------------------------
-- Placeholder table for view `mydb`.`lista_tarefa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`lista_tarefa` (`id` INT);

-- -----------------------------------------------------
-- View `mydb`.`lista_tarefa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`lista_tarefa`;
USE `mydb`;
CREATE  OR REPLACE VIEW lista_tarefa AS SELECT * AS value FROM tarefa;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
