import { Container } from 'unstated';
import { blogActions } from '../actions';

const neutralState = {
  error: null,
  fetched: false,
  fetching: false
};

class BlogContainer extends Container {
  constructor (props) {
    super(props);
    this.containerName = 'BlogContainer';

    this.state = {
      ...neutralState,
      data: {},
      openModal: false,
      editData: null,
      message: null,
      selectedCategoryId: null,
      searchValue: null
    };
  }

  InitialGetBlogPosts = async () => {
    try {
      this.setState({ ...neutralState, fetching: true });
      const response = await blogActions.getBlogPosts();
      return this.setState({ ...neutralState, fetched: true, data: response.data.resultData });
    } catch (error) {
      console.error(error);
      return this.setState({ ...neutralState, fetched: true, error, data: {} });
    }
  }

  AddNewBlogPost = async body => {
    try {
      this.setState({ ...neutralState, fetching: true });
      const response = await blogActions.addNewBlogPost(body);
      return this.setState({ ...neutralState, fetched: true, response, message: 'Successfully added blog post' }, () => {
        this.InitialGetBlogPosts();
      });
    } catch (error) {
      console.error(error);
      return this.setState({ ...neutralState, fetched: true, error });
    }
  }

  RemoveBlogPost = async id => {
    try {
      this.setState({ ...neutralState, fetching: true });
      const response = await blogActions.removeBlogPost(id);
      return this.setState({ ...neutralState, fetched: true, response, message: 'Successfully deleted blog post' }, () => {
        this.InitialGetBlogPosts();
      });
    } catch (error) {
      console.error(error);
      return this.setState({ ...neutralState, fetched: true, error });
    }
  }

  SearchBlogPosts = async term => {
    try {
      this.setState({ ...neutralState, fetching: true });
      const response = await blogActions.searchBlogPosts(term);
      return this.setState({ ...neutralState, fetched: true, data: response.data.resultData, searchValue: term });
    } catch (error) {
      console.error(error);
      return this.setState({ ...neutralState, fetched: true, error, data: {}, searchValue: null });
    }
  }

  EditBlogPost = async body => {
    try {
      this.setState({ ...neutralState, fetching: true });
      const response = await blogActions.editBlogPost(body);
      return this.setState({ ...neutralState, fetched: true, response, message: 'Successfully edited blog post' }, () => {
        this.InitialGetBlogPosts();
      });
    } catch (error) {
      console.error(error);
      return this.setState({ ...neutralState, fetched: true, error });
    }
  }

  GetPostByCategory = async id => {
    try {
      this.setState({ ...neutralState, fetching: true });
      const response = await blogActions.getPostByCategory(id);
      return this.setState({ ...neutralState, fetched: true, data: response.data.resultData });
    } catch (error) {
      console.error(error);
      return this.setState({ ...neutralState, fetched: true, error, data: {} });
    }
  }

  ResetSearchValue = () => {
    this.setState({ searchValue: null });
  }

  ResetSuccessMessage = () => {
    this.setState({ message: null });
  }

  ResetErrorMessage = () => {
    this.setState({ error: null });
  }

  OpenModal = (flag, editData) => {
    this.setState({ openModal: flag, editData: editData });
  }

  SetCategoryId = id => {
    this.setState({ selectedCategoryId: id });
  }

  RemoveSelectedCategoryId = () => {
    this.setState({ selectedCategoryId: null });
  }
}

export default BlogContainer;
