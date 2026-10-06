import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginCredentials, LoginService } from '../../services/login-service';
import { firstValueFrom } from 'rxjs';
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

export type LoginData = LoginCredentials;

@Component({
  imports: [FormField, RouterLink],
  selector: 'app-login-form',
  styleUrl: './login-form.css',
  templateUrl: './login-form.html',
})
export class LoginForm {
  private readonly loginService = inject(LoginService);

  readonly loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  readonly loginForm = form(this.loginModel, this.validations);

  readonly submitted = signal(false);
  readonly submissionError = signal('');

  readonly showEmailError = computed(
    () => this.loginForm.email().touched() && this.loginForm.email().invalid(),
  );

  readonly showPasswordError = computed(
    () => this.loginForm.password().touched() && this.loginForm.password().invalid(),
  );

  private readonly submitOptions: FormSubmitOptions<unknown, LoginData> = {
    action: async () => {
      try {
        await firstValueFrom(
          this.loginService.loginWithObservable({ ...this.loginModel() }),
        );
        this.submitted.set(true);
      } catch (error) {
        this.submissionError.set(
          error instanceof Error ? error.message : 'Login failed. Please try again.',
        );
      }
      return undefined;
    },
    onInvalid: () => {
      this.submitted.set(false);
      this.submissionError.set('Please correct the highlighted fields.');
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
    this.submissionError.set('');
    await submit(this.loginForm, this.submitOptions);
  }
}
