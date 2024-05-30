import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private defaultConfig: Partial<IndividualConfig> = {
    timeOut: 5000, // 5 seconds
    closeButton: true,
    progressBar: true,
  };

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string = '') {
    this.toastr.success(message, title, this.defaultConfig);
  }

  showInfo(message: string, title: string = '') {
    this.toastr.info(message, title, this.defaultConfig);
  }

  showWarning(message: string, title: string = '') {
    this.toastr.warning(message, title, this.defaultConfig);
  }

  showError(message: string, title: string = '') {
    this.toastr.error(message, title, this.defaultConfig);
  }
}
