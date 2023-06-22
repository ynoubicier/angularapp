import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Observable, map } from 'rxjs';
import { ComplexFormService } from '../../services/complex-form.service';
import { confirmEqualValidator } from '../../validators/confirm-equal.validator';
import { IButtonGroupEventArgs } from 'igniteui-angular';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class ComplexFormComponent implements OnInit {

  public linear = false;

  public user: any = {
    fullName: '',
    email: '',
    city: '',
    street: '',
    city2: '',
    street2: '',
    payment: ''
  };

  public paymentTypes: string[] = [
    'PayPal (n@mail.com; 18/02/2021)',
    'Visa (**** **** **** 1234; 12/23)',
    'MasterCard (**** **** **** 5678; 12/24)'
  ];

  public modes: any[] = [
    {
      label: 'Linear', linear: true,
      selected: this.linear === true, togglable: true
    },
    {
      label: 'Non Linear', linear: false,
      selected: this.linear === false, togglable: true
    }
  ];

  public toggleModes(event: IButtonGroupEventArgs): void {
    this.linear = this.modes[event.index].linear;
  }

  constructor(private formBuilder: FormBuilder,
    private complexFormService: ComplexFormService) { }

  ngOnInit(): void {

  }
  onSubmitForm() {

  }

  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    }
    else if (ctrl.hasError('email')) {
      return 'Merci d\'entrer une adresse mail valide';
    }
    else if (ctrl.hasError('minlength')) {
      return 'Ce numéro de téléphone est court';
    }
    else if (ctrl.hasError('maxlength')) {
      return 'Ce numéro de téléphone est long';
    }
    else {
      return 'Ce champ contient une erreur';
    }
  }
}

