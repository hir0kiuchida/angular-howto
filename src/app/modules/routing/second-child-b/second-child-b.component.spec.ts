import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SecondChildBComponent } from "./second-child-b.component";

describe("SecondChildBComponent", () => {
  let component: SecondChildBComponent;
  let fixture: ComponentFixture<SecondChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondChildBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
