import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostList } from './organizacion-list';

describe('PostList', () => {
  let component: PostList;
  let fixture: ComponentFixture<PostList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostList],
    }).compileComponents();

    fixture = TestBed.createComponent(PostList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
