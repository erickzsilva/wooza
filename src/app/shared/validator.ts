import { AbstractControl } from '@angular/forms';

export class Validator {
       static ValidaCpf(controle: AbstractControl) {
        const cpf = controle.value;
    
        let soma: number = 0;
        let resto: number;
        let valido: boolean;
    
        const regex = new RegExp(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/);
    
        if (
          cpf == '00000000000' ||
          cpf == '11111111111' ||
          cpf == '22222222222' ||
          cpf == '33333333333' ||
          cpf == '44444444444' ||
          cpf == '55555555555' ||
          cpf == '66666666666' ||
          cpf == '77777777777' ||
          cpf == '88888888888' ||
          cpf == '99999999999' ||
          !regex.test(cpf)
        ){
          valido = false;
          console.log(cpf);

        }
          
        else {
          for (let i = 1; i <= 9; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
            resto = (soma * 10) % 11;
    
          if (resto == 10 || resto == 11) resto = 0;
          if (resto != parseInt(cpf.substring(9, 10))) valido = false;
    
          soma = 0;
          for (let i = 1; i <= 10; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
            resto = (soma * 10) % 11;
    
          if (resto == 10 || resto == 11) resto = 0;
          if (resto != parseInt(cpf.substring(10, 11))) valido = false;
          valido = true;
        }
    
        if (valido) return null;
    
        return { cpfInvalido: true };
      }
    
      static MaiorQue18Anos(controle: AbstractControl) {
        const nascimento = controle.value
        

        if(nascimento){
          const [ano, mes, dia] = nascimento.toString().split('-')
          const hoje = new Date()
          const dataNascimento = new Date(ano, mes, dia)
          const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18 //18 anos em mili segundos...
    
          if (hoje.getTime() - dataNascimento.getTime() + 2246504389 >= tempoParaTeste)
            return null;      
          return { menorDeIdade: true }
        }
        return null;
      }
}
