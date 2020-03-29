import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HireService } from '../../shared/hire.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication.service';

import * as industries from '../../../app/data/industries.json';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };


  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private hireService: HireService, public authenticationService: AuthenticationService, private http: HttpClient) { }

  // listFilter
  get listFilter(): string {
    return this.industriesFilter;
  }
  set listFilter(value: string) {
    this.industriesFilter = value;
    this.filteredIndustries = this.listFilter ? this.doFilter(this.listFilter) : this.industries;

    if (this.filteredIndustries.length > 0) {
      this.showListDetail = true;
    }

    if (this.industriesFilter === '') {
      this.showListDetail = false;
    }
  }


  // Selected Role
  get role(): any[] {
    return this.selectedRoles;
  }


  // Email
  get userEmail(): string {
    return this.user.email;
  }
  set userEmail(value: string) {
    this.user.email = value;
  }

  // Company
  get userCompany(): string {
    return this.user.company;
  }
  set userCompany(value: string) {
    this.user.company = value;
  }

  // Contact
  get userContact(): string {
    return this.user.contact;
  }
  set userContact(value: string) {
    this.user.contact = value;
  }

  // Phone
  get userPhone(): string {
    return this.user.phone;
  }
  set userPhone(value: string) {
    this.user.phone = value;
  }



  answerArray = [];
  currQuestion = 0;
  allowNav = false;
  selectArray = [];
  inputValues: any = ['', '', '', ''];
  showQuestionForm = true;
  showSignUpForm = false;
  showListDetail = false;
  selectedRoles = [];
  user: any = {
    email: '',
    company: '',
    contact: '',
    phone: '',
  };

  industriesFilter = '';

  filteredIndustries: any = [];
  industries: any = (industries as any).default;

  questions: any = [
    {
      id: 1,
      question: 'What role are you hiring for?',
      checkbox: true,
      options: [
        { id: 1, name: 'Finance' },
        { id: 2, name: 'Accounting' },
        { id: 3, name: 'Valuation' },
        { id: 4, name: 'Legal' },
        { id: 5, name: 'Meeting Buyers' },
      ],
    },
    {
      id: 2,
      question: 'How soon do you want to sell?',
      radio: true,
      options: [
        { id: 1, name: '1 - 5 months' },
        { id: 2, name: '6 - 12 months' },
        { id: 3, name: '1 - 3 years' },
        { id: 4, name: '5 years or more from now' }
      ],
    },
    {
      id: 3,
      question: 'Willing to hire remote?',
      radio: true,
      options: [
        { id: 1, name: 'Yes' },
        { id: 2, name: 'No' },
      ],
    },
  ];


  doFilter(filterBy: string): any {
    filterBy = filterBy.toLocaleLowerCase();
    return this.industries.filter((industry: any) =>
      industry.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  makeSelection(questionNo, answerNo, choice, select: boolean, event: any) {
    console.log('Question number: ' + (questionNo + 1) + ', Option number: ' + (answerNo + 1) + ', ' + choice, 'stuff');
    this.answerArray[this.currQuestion] = answerNo;
    if (!select) {
      this.allowNav = true;
    } else {
      this.selectArray[answerNo] = event.target.value;
      let total = 0;
      let noZero = 0;
      if (this.selectArray.length > 4) {
        this.selectArray.forEach((element, i) => {
          total += Number(element);
          if (element !== 0) {
            noZero++;
          }
        });

        if (total === 15 && noZero === 5) {
          this.allowNav = true;
        } else {
          this.allowNav = false;
        }
      }
    }
    console.log(this.answerArray, 'this.answerArray');
  }

  startQuestions() {
    this.currQuestion++;
    this.allowNav = false;
  }

  previousQuestion() {
    this.currQuestion--;
    if (this.answerArray[this.currQuestion] !== null) {
      this.allowNav = true;
    } else {
      this.allowNav = false;
    }
  }

  nextQuestion() {
    if ((this.currQuestion + 1) === this.questions.length) {
      this.showQuestionForm = false;
      this.showSignUpForm = true;
    } else if (this.currQuestion < this.questions.length) {
      this.currQuestion++;
      this.allowNav = false;
    }
  }

  inputChange() {
    console.log(this.inputValues, 'this.inputValues');
    this.allowNav = true;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.inputValues.length; i++) {
      if (this.inputValues[i] === '' || this.inputValues[i] === null || !this.inputValues[i] || this.inputValues[i] === undefined) {
        this.allowNav = false;
        console.log(this.inputValues[i], 'elementfalse');
        return;
      }
    }
  }

  selectIndustry(industry) {
    this.industriesFilter = industry.id + ' ' + industry.name;
    this.showListDetail = false;
  }

  signUp() {

    this.authenticationService.SignUp(this.user.email, '*ABC123*')
      .then((result) => {

        // Save Values
        this.hireService.createHire({
          userUID: result.user.uid,
          contactEmail: this.user.email,
          companyName: this.user.company,
          contactName: this.user.contact,
          contactPhone: this.user.phone,
          roleName: this.selectedRoles,
          howSoon: this.questions[1].options[this.answerArray[1]].name,
          hireRemote: this.questions[2].options[this.answerArray[2]].name
        });


        const options = {
          companyName: this.user.company,
          contactEmail: this.user.email,
          contactName: this.user.contact,
          contactPhone: this.user.phone,
          roleName: this.selectedRoles,
          howSoon: this.questions[1].options[this.answerArray[1]].name,
          hireRemote: this.questions[2].options[this.answerArray[2]].name,
        };
        this.http.post('https://api.ownersweek.com/api/v1/customers/signup', options, this.httpOptions).subscribe();


        window.alert('Thank you for reaching out to Owners Week about selling your business. Please check your email for a link to schedule your free and confidential consultation with an exit advisor.');
        console.log(result.user);

      }).catch((error) => {
        window.alert(error.message);
      });
  }

  selectRole(name: string, isChecked: boolean) {
    if (this.selectedRoles.indexOf(name) === -1) {
      this.selectedRoles.push(name);
    } else {
      this.selectedRoles.indexOf(name);
      this.selectedRoles.splice(this.selectedRoles.indexOf(name), 1);
    }

  }

  ngOnInit() {
    console.log(industries);
  }

}
