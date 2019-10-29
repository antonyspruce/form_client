import { useStore } from './StoreProvider';

const useInject = mapStateToProps => {
  const store = useStore();
  return mapStateToProps(store);
};

export default useInject;
