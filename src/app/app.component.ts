import {Component, OnDestroy} from '@angular/core';
import {UserDataModel} from './core/model/user-data.model';
import {UsersService} from './core/service/users.service';
import {Subscription} from 'rxjs';
import {SelectedUserModel} from './core/model/selected-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public users: Array<UserDataModel> = [];
  public loading = false;
  public emptyUsersArrayMessage: string;
  public selectedUsers: Array<SelectedUserModel> = [];
  public inputValue: string;
  private searchUserSubscription: Subscription = new Subscription();

  constructor(private userService: UsersService) {
  }

  ngOnDestroy(): void {
    this.searchUserSubscription.unsubscribe();
  }

  public selectUser(user: UserDataModel): void {
    const newUser: SelectedUserModel = {
      id: user.id,
      name: user.name,
      date: new Date()
    };
    this.selectedUsers.push(newUser);
    this.inputValue = user.name;
    this.resetSearchState();
  }

  public removeSelectedUser(user: SelectedUserModel): void {
    const index = this.selectedUsers.indexOf(user);
    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    }
  }

  public searchUser(searchValue): void {
    if (searchValue.target.value) {
      this.loading = true;
      this.resetSearchState();
      this.searchUserSubscription = this.userService.search(searchValue.target.value)
        .subscribe((resp: Array<UserDataModel>) => {
          if (resp.length < 1) {
            this.emptyUsersArrayMessage = 'No similar item found!';
          }
          this.users = resp;
          this.loading = false;
        });
    } else {
      this.resetSearchState();
      this.loading = false;
    }
  }

  public clearHistory(): void {
    this.selectedUsers = [];
  }

  public clearInput(): void {
    this.inputValue = '';
    this.resetSearchState();
  }

  private resetSearchState(): void {
    this.users = [];
    this.emptyUsersArrayMessage = '';
  }
}
