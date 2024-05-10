import { axiosWithAuth } from 'api';
import { API_ENDPOINTS } from 'config';

class CardService {
  async addNewCard(boardId, columnId, data) {
    const response = await axiosWithAuth.post(
      `${API_ENDPOINTS.DASHBOARD}/${boardId}/${columnId}`,
      data
    );

    return response.data;
  }

  async changeCardColumn(boardId, columnId, cardId, newColumnId) {
    const response = await axiosWithAuth.patch(
      `${API_ENDPOINTS.DASHBOARD}/${boardId}/${columnId}/${cardId}/${newColumnId}`
    );

    return response.data;
  }

  async editCard(boardId, columnId, cardId, data) {
    const response = await axiosWithAuth.patch(
      `${API_ENDPOINTS.DASHBOARD}/${boardId}/${columnId}/${cardId}`,
      data
    );

    return response.data;
  }

  async deleteCard(boardId, columnId, cardId) {
    const response = await axiosWithAuth.delete(
      `/dashboard/${boardId}/${columnId}/${cardId}`
    );

    return response.data;
  }
}

export const cardService = new CardService();
