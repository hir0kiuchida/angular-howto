import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SecondChildAComponent } from "./second-child-a.component";

describe("SecondChildAComponent", () => {
  let component: SecondChildAComponent;
  let fixture: ComponentFixture<SecondChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondChildAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
