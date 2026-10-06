import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  email,
  form,
  FormField,
  FormSubmitOptions,
  maxLength,
  minLength,
  PathKind,
  pattern,
  required,
  SchemaPathTree,
  submit,
} from '@angular/forms/signals';

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const AUTH_LATENCY_MS = 700;

@Component({
  imports: [FormField, RouterLink],
  selector: 'app-login-form',
  styleUrls: ['../../app.css', './login-form.css'],
  templateUrl: './login-form.html',
})
export class LoginForm {
  readonly loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  readonly loginForm = form(this.loginModel, this.validations);

  readonly submitted = signal(false);

  readonly showEmailError = computed(
    () => this.loginForm.email().touched() && this.loginForm.email().invalid(),
  );

  readonly showPasswordError = computed(
    () => this.loginForm.password().touched() && this.loginForm.password().invalid(),
  );

  private readonly submitOptions: FormSubmitOptions<unknown, LoginData> = {
    action: async () => {
      await new Promise((resolve) => setTimeout(resolve, AUTH_LATENCY_MS));
      this.submitted.set(true);
      return undefined;
    },
    onInvalid: () => {
      this.submitted.set(false);
    },
  };

  validations(schemaPath: SchemaPathTree<LoginData, PathKind.Root>) {
    required(schemaPath.email, { message: 'Email address is required' });
    email(schemaPath.email, { message: 'Enter a valid email address, e.g. you@example.com' });

    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 6, { message: 'Password must be at least 6 characters' });
    maxLength(schemaPath.password, 12, { message: 'Password must be at most 12 characters' });
    pattern(schemaPath.password, /^(?=.*[A-Za-z])(?=.*\d)/, {
      message: 'Password must contain at least one letter and one number',
    });
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.submitted.set(false);
    await submit(this.loginForm, this.submitOptions);
  }
}
